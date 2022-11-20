"use strict"

const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require("url");

const request = require("request");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const cookieParser = require("cookie-parser");

const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({secret: 'secret',saveUninitialized: true,resave: true}));
app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({extended: true}));

const router = express.Router();

app.set("view engine", "ejs");
app.engine("ejs", require("ejs").__express);
app.use(express.static("public"));
app.use("/", router);

router.get("/",(req,res) => {
console.log("Here");
res.send("Hello by Andrew");
})

router.get("/form",function(req,res){
const html = `
<div id="login-form">
            <form action="/awsdata" method="POST">
                <input class="login-form-inputs" type="text" name="email" placeholder="Email">
                <input class="login-form-inputs" type="text" name="password" placeholder="Password">
                <input id="login-form-button" type="submit">
            </form>
        </div>`; // Create your html form here
res.send(html);
})

router.post("/awsdata",function(req,res){
    const email = req.body.email; // Complete the missing pieces
    const password = req.body.password;// Complete the missing pieces
    
    request("http://execute-api.us-east-2.amazonaws.com",{json:true},(err,response,body)=>{
        if(err){
            return console.log(err)
        };
        if(body.Count>0){ 
            //DISPLAY VALID RESPONSE
            console.log(body);
        }else{ 
            //DISPLAY ERROR RESPONSE
            console.log("That wasnt right silly!!")
        }
    })
})
