"use strict"

const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require("url");

const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
const router = express.Router();

app.set("view engine", "ejs");
app.engine("ejs", require("ejs").__express);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", router);

const port = 8080;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

router.get('/', (req, res) => {
    res.render('pages/index', {pagename: 'Home'});
})

router.get('/about', (req, res) => {
    res.render('pages/about', {pagename: 'About'});
})

router.get('/products', (req, res) => {
    res.render('pages/products', {pagename: 'Products'});
})

router.get('/store', (req, res) => {
    res.render('pages/store', {pagename: 'Store'});
})

router.post('/login', (req, res) => {
    let errors = [];
    let test = "this is a test";
    if(req.body.email == ""){
        errors.push('Email is required');
    }
    if(req.body.password == ""){
        errors.push('Password is required');
    }
    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(req.body.email)){
        errors.push('Email is not valid!');
    }
    if(!/^([a-zA-Z0-9@*#]{8,15})$/.test(req.body.password)){
        errors.push('Password is not valid!');
    }

    res.render('pages/index', {pagename: 'Home', errors: errors});
    for (x in errors) {
        console.log(errors[x]);
    }
})