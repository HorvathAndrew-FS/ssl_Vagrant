"use strict"
const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');

const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let ejs = require('ejs');
const app = express();
const router = express.Router();
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);

router.get('/', (req, res) => {
    res.render('index',{pagename: 'Home'});
})

router.get('/about', (req, res) => {
    res.render('about',{pagename: 'About'});
})




app.use(express.static('public'));
app.use('/', router);
const server = app.listen('8080');
