const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const isDev = require('electron-is-dev');
const path = require("path");
const url = require("url");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 600,
    frame: false,
    titleBarStyle: "hiddenInset",
    icon: __dirname + "/src/win.ico",
    webPreferences: {
      nodeIntegration: true
    }
  });
  mainWindow.setMenuBarVisibility(true);
  mainWindow.webContents.openDevTools();
  // mainWindow.loadURL('http://localhost:3000');
  // mainWindow.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);
  // mainWindow.loadURL(isDev ? 'http://localhost:3000' : 'http://localhost:5000');

  mainWindow.loadURL(
    process.env.ELECTRON_START_URL ||
      url.format({
        pathname: path.join(__dirname, '../build/index.html'),
        protocol: "file:",
        slashes: true
      })
  );

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});



//// Package.json
// "build": {
//   "appId": "com.example.electron-cra",
//   "files": [
//     "build/**/*",
//     "node_modules/**/*"
//   ],
//   "directories":{
//     "buildResources": "assets"
//   }
// }