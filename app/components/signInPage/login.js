'use strict';
const remote = require('electron').remote;
const main = remote.require('./main.js');
const { dialog } = require('electron').remote;
const $ = require('jquery');
const ipcRender = require('electron').ipcRenderer;
const db = require('../../utils/dbConfig.js');
const c = remote.getGlobal('console');
var mysql = require('mysql');



//footer date
var writeFooterDate = () => {
    let nowDate = new Date
    $('.copyright').text(`© ArzyLab 2018 - ${nowDate.toLocaleString('ru', {year: 'numeric'})}`)
}

writeFooterDate();

//open regWindow

$('.signUp').click(() => {
    main.openReg()
})

$('.signIn').click(() => {
    try {
        const userName = $('#username').val();
        const password = $('#password').val();
        if (!userName && !password) {
            dialog.showMessageBox({title: 'Ошибка!', message: `Заполните все поля!`});
            throw Error('incorrect input');
        }
        let loginType = userName.includes('@') ? 'email' : 'username';
        db.query(`SELECT * FROM users WHERE ${loginType} = ?`, [userName], function(error, result){
            if (error) {
                dialog.showMessageBox({title: 'Ошибка!', message: 'Произошел сбой при попытке подключение к серверам, пожалуйста повторите попытку позднее!'});
                throw new Error(`${error}`);
            }
            if (!result[0]) {
                dialog.showMessageBox({title: 'Ошибка!', message: `Аккаунт не найден!!!`});
                $('#username').val('');
                $('#password').val('');
                throw new Error('unregistered user');
            }
            if (result[0].password !== password) {
                dialog.showMessageBox({title: 'Ошибка!', message: `Неверный пароль!!!`});
                $('#password').val('');
                throw new Error('invalid password');
            }
            let window = remote.getCurrentWindow();
            main.openWorkSpace();
            window.close();
        });
    }
    catch (e) {
        console.log(e);
    }

})
