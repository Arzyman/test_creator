'use strict'

const remote = require('electron').remote
const config = require('../../src/config.js')
const c = remote.getGlobal('console')
const $ = require('jquery')

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

var clearError = (errors) => {
    c.log(errors)
}

$('input').on('focus', () => {
    
})

$('select').on('focus', () => {
    $('select').removeClass('error')
})

var checkEmpty = (user) => {
    let i = -1
    let errorKeys = []
    for (var key in user) {
        if ((!user[key]) || (user[key] === null)) {

            $(`#${key}`).val('! Пустое поле').addClass('error')
            $('.position').addClass('error')

            if (key == 'password') $('#password').val('')
            if (key == 'rePassword') $('#repeate-password').addClass('error')
            
            errorKeys[i++] = key
        }
        return errorKeys
    }
}

var registrationCheck = (user) => {
    let emptyError = checkEmpty(user)
    clearError(emptyError)
}

// var chekSpace = () => {

// }

$('.signUp').click( () => {
    let user = getUserData()
    registrationCheck(user)
})

// back button
$('.back').click( () => {
    window.close()
})

// database connection
var dbCon = config.db()

 dbCon.connect((err) => {
    if (err) c.log('Connection error')
    c.log('Connection succes')
})