const {app, BrowserWindow} = require('electron')

let logWindow

app.on('ready', () => {
    logWindow = new BrowserWindow({
        width: 1200,
        height: +'800',
        minWidth: 1200, 
        minHeight: 800, 
    })
    logWindow.loadURL(`file://${__dirname}/dist/signInUp/login.html`)
    logWindow.maximize()
})

exports.openReg = () => {
    logWindow.loadURL(`file://${__dirname}/dist/signInUp/reg.html`)
}
exports.openLog = () => {
    logWindow.loadURL(`file://${__dirname}/dist/signInUp/login.html`)
}

exports.openWorkSpace = () => {
    openWorkSpace = new BrowserWindow({width: 1200, height: 800})
    openWorkSpace.loadURL(`file://${__dirname}/dist/workSpace/index.html`)
    openWorkSpace.maximize()
}
