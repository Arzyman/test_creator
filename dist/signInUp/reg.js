'use strict'

const remote = require('electron').remote
const config = require('../../src/js/config')
const c = remote.getGlobal('console')
const $ = require('jquery')
const main = remote.require('./main.js')

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
}

var allowOnlyAplpha = (inputText) => {
    return (inputText.search(/[,.!?;:()/]/) != -1 || inputText.search(/\d/) != -1) ?
        false : true

}
 
var allowOnlyEngAplpha = (inputText) => {
    return (inputText.search(/[а-яё]/) != -1) ? 
        false : true
}

//function for check empty inputs
var checkEmpty = (user) => {
    let emptyInput = 0
    
    for (var key in user) {
        if ((!user[key]) || (user[key] === null)) {

            $(`#${key}`).attr('placeholder', 'Заполните поле').addClass('error')
            $('.position').addClass('error')

            if (key == 'password') $('#password').val('')
            if (key == 'rePassword') $('#repeate-password').
                attr('placeholder', 'Заполните поле').addClass('error')

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
                    attr('placeholder', 'Недопустимые символы')
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
                    attr('placeholder', 'Недопустимые символы')
                return false
            }
        }
    }
    return true
}

var checkUsername = (user) => {
    let query = `SELECT * FROM users WHERE username = '${user.username}'`
    dbCon.query(query, (err, result, fields) => {
        if (err) {
            c.log(err)
        } else {
            c.log(result)
        }
    })
}

var registrationCheck = (user) => {
    if (checkEmpty(user)) {
        if (checkCorrectSymbols(user)) {
            checkUsername(user)
        }
    }

    return false
}

$('.signUp').click( () => {
    let user = getUserData()
    registrationCheck(user)
})

// back button
$('.back').click( () => {
    main.openLog()
})

$('input').on('input', () => {
    $('input').removeClass('error')
})

$('select').on('focus', () => {
    $('select').removeClass('error')
})

// database connection
var dbCon = config.db()

 dbCon.connect((err) => {
    if (err) c.log('Connection error')
})