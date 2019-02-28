'use strict';

const mysql = require('mysql');

const dbConfig = {
    host: 'aynurzdv.beget.tech',
    database: 'aynurzdv_testcre',
    user: 'aynurzdv_testcre',
    password: 'kscsqlzlz555',
    connectionLimit: 10
};

const db = mysql.createPool(dbConfig);


module.exports = db;




