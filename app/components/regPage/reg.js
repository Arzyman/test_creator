'use strict';

const remote = require('electron').remote;
const { dialog } = require('electron').remote;
const db = require('../../utils/dbConfig.js');
const c = remote.getGlobal('console');
const $ = require('jquery');
const main = remote.require('./main.js');

var getUserData = () => {
    return {
        secondname: $('#secondname').val(),
        firstname: $('#firstname').val(),
        position: $('.position').val(),
        email: $('#email').val(),
        username: $('#username').val(),
        password: $('#password').val(),
        rePassword: $('#repeate-password').val()
    }
};

var allowOnlyAplpha = (inputText) => {
    return (inputText.search(/[,.!?;:()/]/) != -1 || inputText.search(/\d/) != -1) ?
        false : true

}
 
var allowOnlyEngAplpha = (inputText) => {
    return (inputText.search(/[а-яё]/) != -1) ? 
        false : true
}

//function for check empty inputs
const checkEmpty = (user) => {
    let emptyInput = 0;
    
    for (var key in user) {
        if ((!user[key]) || (user[key] === null)) {

            $(`#${key}`).attr('placeholder', 'Заполните поле').addClass('error');
            $('.position').addClass('error')

            if (key == 'password') $('#password').val('');
            if (key == 'rePassword') $('#repeate-password').
                attr('placeholder', 'Заполните поле').addClass('error');

            emptyInput++
        }
    }
    return (!emptyInput) ? true : false
}

//function for check correct inputs
var checkCorrectSymbols = (user) => {
    for (var key in user) {

        let element = $(`#${key}`)
        
        if (key == 'secondname' || key == 'firstname') {
            if (!allowOnlyAplpha(element.val())) {
                element.val('').addClass('error').
                    attr('placeholder', 'Недопустимые символы');
                return false
            }
        }

        if (key == 'email') {
            if (element.val().search('@') == -1 || element.val().search(' ') != -1) {
                element.val('').addClass('error').
                    attr('placeholder', 'Некорректный адрес')
                return false
            }
        }

        if (key == 'username') {
            if (!allowOnlyEngAplpha(element.val()) || element.val().search(' ') != -1) {
                element.val('').addClass('error').
                    attr('placeholder', 'Недопустимые символы');
                return false
            }
        }
    }
    return true
};

// main function with all reg func

const registrationCheck = (user) => {
    if (checkEmpty(user)) {
        if (checkCorrectSymbols(user)) {
            return true;
        }
    }

    return false
};

$('.signUp').click( () => {
    try {
        //get user data
        const userData = getUserData();
        const postData = {
            firstname: userData.firstname,
            secondname: userData.secondname,
            type: userData.position,
            email: userData.email,
            username: userData.username,
            password: userData.password
        };
        // verify is email or username alredy registered and try complete registration
        if (!registrationCheck(getUserData())) throw new Error('incorrect input');
        db.query(`SELECT * FROM users WHERE email = ?`, [userData.email], function(error, result){
            if (error) throw new Error('Database connection error');
            if (result[0]) {
                dialog.showMessageBox({title: 'Ошибка!', message: `Аккаунт с таким email  уже зарегистрирован!!!`});
                $('#email').val('');
                throw new Error('email is already registered');
            }
            db.query(`SELECT * FROM users WHERE username = ?`, [userData.username], function(error, result){
                if (error) throw new Error('Database connection error');
                if (result[0]) {
                    dialog.showMessageBox({title: 'Ошибка!', message: `Данный никнейм уже используется!!!`});
                    $('#username').val('');
                    throw new Error('username is already registered');
                }
                db.query(`INSERT INTO users SET ?`, postData, function(error, result){
                    if (error) throw new Error('Database connection error');
                    console.log('successfully registered');
                })
            })
        })
    }
    catch (e) {
        if (e.message === 'Database connection error') dialog.showMessageBox({title: 'Ошибка!', message: `Произошла непредвиденная ошибка!!!!`});
        console.log(e);
    }
});

// back button
$('.back').click( () => {
    main.openLog()
});

$('input').on('input', () => {
    $('input').removeClass('error')
});

$('select').on('focus', () => {
    $('select').removeClass('error')
});



