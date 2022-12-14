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
router.get('/register', (req, res) => {
    res.render('pages/register', {pagename: 'Register'});
})
//validation and routing for small login form
router.post('/login', (req, res) => {
    let errors = [];
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
    res.render('pages/index', {pagename: 'Home', errors:errors, success: "Success"});
})

//validation and routing for registration form
router.post('/register', (req, res) => {
    //variables to hold errors and success values
    let errors = {};
    let success = "Success";
    
    if(!/^(?!\s*$)[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,]{2,20}$/.test(req.body.fName)){
        errors.fName = 'First Name is Not Valid!!';
    }
    if(!/^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,]{2,20}$/.test(req.body.lName)){
        errors.lName = 'Last Name is Not Valid!!';
    }
    if(!/\d{1,}(\s{1}\w{1,})(\s{1}?\w{1,})+/.test(req.body.address)){
        errors.address = 'Address is Not Valid!!';
    }
    if(!/^[a-zA-Z]+(?:[\s-'.&/][a-zA-Z]+)*(?:[.|\s])?(?:[\(a-z\)]{2,20})*$/.test(req.body.city)){
        errors.city = 'City is Not Valid!!';
    }
    if(!/(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])/.test(req.body.state.toUpperCase())){
        errors.state = 'State is Not Valid!!';
    }
    if(!/^\b\d{5}(-\d{4})?\b$/.test(req.body.zip)){
        errors.zip = 'Zip is Not Valid!!';
    }
    if(req.body.age == "0"){
        errors.age = 'Please select your age!';
    }
    if(req.body.gender != "male" && req.body.gender != "female"){
        errors.gender = "Please choose a gender";
    }
    if(req.body.consent != "consent"){
        errors.consent = 'Please consent to register'
    }
    if(req.body.bio == "" || req.body.bio == "<script>" || /[^A-Za-z0-9 .'?!,@$#-_\n\r]/.test(req.body.bio)){
        errors.bio = "Please enter a valid bio!";
    }
    
    //checking the errors object for the existence of values and to pass them to the page 
    if(Object.keys(errors).length > 0){
        res.render('pages/register', {pagename: 'Home', errors:errors});
    
    //if errors is defined, but zero, the page is passed the success variable to show successful validation
    } else {
        res.render('pages/register', {pagename: 'Home', errors:errors, success:success});
        console.log("app.js", success);
    }
    
})