const { app,BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");
let mainWindow = null;

app.on("ready",() => {
    mainWindow = new BrowserWindow({
        width:1024,
        height:600,
        webPreferences:{
            nodeIntegration:true
        }
    });
    const locationURL = isDev ? "http://localhost:8000":""
    mainWindow.loadURL(locationURL);
})
