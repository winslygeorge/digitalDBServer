const express = require('express')

const DbManager = require('./../DBManager')

const db = new DbManager()

const mysql = require('mysql')

const route = express.Router()

route.get('/digitalurlget', (req, res)=>{

 // res.send({resultCode : 200, results : req.query.fields});
  
  db.dbgetRequest(res, db.queryGenerator(req))
})

module.exports = route