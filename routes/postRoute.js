const express = require('express')

const DbManager = require('./../DBManager')

const db = new DbManager()

const mysql = require('mysql')

const route = express.Router()



route.post('/digitalurlpost', (req, res, err)=>{

 var body = req.body;
   
  db.dbPostRequest(res,db.handleInsertBody(body))

   var q =  mysql.format('select * from ??', ['customer_table'])

})

module.exports = route