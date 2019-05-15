from aiohttp import web
import socketio , sys


# creates a new Async Socket IO Server
sio = socketio.AsyncServer()
app = web.Application()
sio.attach(app)

# If we wanted to create a new websocket endpoint,
# use this decorator, passing in the name of the
# event we wish to listen out for
@sio.on('message')
async def print_message(sid, message):
    print("Socket ID: " , sid)
    print(message)
    sys.stdout.flush()

@sio.on('connect')
async def connect(sid, environ):
    print("connect ", sid)
    sys.stdout.flush()
    await sio.emit('connected',"Connected to Layout" ,room=sid)
    await sio.emit('testconn-reply',"Connected to Websocket Test Component" ,room=sid)

@sio.on('chat')
async def chats(sid, data):
    print("message ", data)
    sys.stdout.flush()
    await sio.emit('chatreply',data ,room=sid)

@sio.on('calc')
async def calcs(sid, data):
    print("Amount ", data*1000)
    sys.stdout.flush()
    await sio.emit('calcreply',{'foo':data*1000}, room=sid)

@sio.on('func1')
async def func1(sid, data):
    print("Func1:", data)
    sys.stdout.flush()
    await sio.emit('func1-reply',data ,room=sid)

@sio.on('func2')
async def func2(sid, val):
    print("Func2:", val*150)
    sys.stdout.flush()
    await sio.emit('func2-reply',val*150 ,room=sid)

@sio.on('closesoc')
async def closeme(sid, val):
    print("closeme")
    sys.stdout.flush()
    await sio.emit('closesoc-reply', "closing" ,room=sid)


@sio.on('disconnect')
def disconnect(sid):
    print('disconnect ', sid)
    sys.stdout.flush()


# We kick off our server
if __name__ == '__main__':
    web.run_app(app)



