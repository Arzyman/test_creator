const electron = require('electron').remote
const $ = require('jquery')
const { dialog } = require('electron').remote
const { session } = require('electron').remote

let cookie = {
    url: 'https://cookie.com',
    name: 'user',
    value: '123'
}

session.defaultSession.cookies.set(cookie, (err) => {
    if (err) console.log(err)
})

$('#qqq').click(() => {
    // dialog.showOpenDialog({
    //     title: 'Simple Dialog'
    // }, (filepath) => {
    //     console.log('Filepath: ', filepath)
    // })

    session.defaultSession.cookies.get({}, (err, cookies) => {
        console.log(err, cookies)
    })
})
