const {app, BrowserWindow} = require('electron')

let logWindow
let mainWindow

app.on('ready', () => {
    logWindow = new BrowserWindow({
        width: 1200,
        height: 680,
        resizable: false,
        center: true,
        autoHideMenuBar: true
    })
    logWindow.loadURL(`file://${__dirname}/app/components/signInPage/login.html`)
})

//-----------------------

exports.openReg = () => {
    logWindow.loadURL(`file://${__dirname}/app/components/regPage/reg.html`)
}
exports.openLog = () => {
    logWindow.loadURL(`file://${__dirname}/app/components/signInPage/login.html`)
}

exports.openWorkSpace = () => {
    mainWindow = new BrowserWindow({minWidth: 1200, minHeight: 680, center: true})
    mainWindow.loadURL(`file://${__dirname}/app/components/mainPage/workSpace.html`)
    mainWindow.maximize()
}