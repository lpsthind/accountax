
/*************************************************************
 * py process
 *************************************************************/
const path = require("path");
const fs = require('fs')
const child = require('child_process')


const PY_DIST_FOLDER = 'pycalcdist'
const PY_FOLDER = 'pyapi'
const PY_MODULE = 'pyapi' // without .py suffix

let pyProc = null
let pyPort = null

var unit8arrayTostring = function(data){
  return String.fromCharCode.apply(null,data)
}


const guessPackaged = () => {
  const fullPath = path.join(__dirname, PY_DIST_FOLDER)
  return fs.existsSync(fullPath)
}

const getScriptPath = () => {
  if (!guessPackaged()) {
    return path.join(__dirname, PY_FOLDER, PY_MODULE + '.py')
  }else if (process.platform === 'win32') {
    return path.join(__dirname, PY_DIST_FOLDER, PY_MODULE, PY_MODULE + '.exe')
  }else {
    return path.join(__dirname, PY_DIST_FOLDER, PY_MODULE, PY_MODULE)
  }
}

const selectPort = () => {
  pyPort = 8080
  return pyPort
}

const exitPyProc = () => {
  console.log("Quit...")
  pyProc.kill()
  pyProc = null
  pyPort = null
}

const createPyProc = () => {
  let script = getScriptPath()
  let port = '' + selectPort()
  var chunk = ""

  if (guessPackaged()) {
    pyProc = child.execFile(script, [port])
  } else {
    pyProc = child.spawn('python', [script, port])
  }
 
  if (pyProc != null) {
    //console.log(pyProc)
    console.log('child process success on port ' + port)
  }

  pyProc.stdout.on('data',(data)=>{
    var chunk = unit8arrayTostring(data)
    console.log(chunk.length,chunk)
    if(chunk === "closeme\n"){
      console.log(chunk)
      exitPyProc()
    }
  })

  pyProc.stdout.on('end',()=>{
    console.log(unit8arrayTostring(chunk))
  })

  pyProc.stderr.on('data',(data)=>{
   console.log(unit8arrayTostring(data))
  })

  pyProc.on('exit',(code)=>{
    console.log(`Process quit with code ${code}`)
  })
}

createPyProc()

