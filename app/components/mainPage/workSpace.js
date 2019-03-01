'use strict'
//imports

const electron = require('electron').remote
const $ = require('jquery')
const ui = require('jquery-ui')
const main = electron.require('./main.js')
const { session } = require('electron').remote
const c = require('electron').remote.getGlobal('console')
c.log('---')

// var testConfig = {
//     testName: (name) => {
//         $('.test-name').text(`${name}`)
//     },
//     testDesc: (desc) => {
//         $('.test-description').text(`${desc}`)
//     },
//     testInfo: {
//         testAuthor: (author) => {
//             $('.test-author').text(`${author}`)
//         },
//         testRating: (rating) => {
//             $('.test-rating').text(`${rating}`)
//         },
//         testLesson: (lesson) => {
//             $('.test-lesson').text(`${lesson}`)
//         }
//     }
// }

var writeFooterDate = () => {
    let nowDate = new Date
    $('.footer-text').text(`© ArzyLab 2018 - ${nowDate.toLocaleString('ru', {year: 'numeric'})}`)
}

writeFooterDate()

$('#quit').click(()=> {
    main.openLog()
})
