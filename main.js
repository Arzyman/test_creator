const {app, BrowserWindow} = require('electron')

let logWindow

app.on('ready', () => {
    logWindow = new BrowserWindow({
        width: 1200,
        height: 680,
        resizable: false,
        center: true,
        show: false,
    });
    logWindow.once('ready-to-show', () => {
        logWindow.show()
    });
    logWindow.loadURL(`file://${__dirname}/app/components/signInPage/login.html`);
    // logWindow.setMenu(null)
});

exports.openReg = () => {
    logWindow.loadURL(`file://${__dirname}/app/components/regPage/reg.html`)
}
exports.openLog = () => {
    logWindow.loadURL(`file://${__dirname}/app/components/signInPage/login.html`)
}

exports.openWorkSpace = () => {
    logWindow.loadURL(`file://${__dirname}/app/components/mainPage/index.html`)
}