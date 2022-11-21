"use strict"

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({extended: true}));

const router = express.Router();

app.use("/", router);

const port = 8080;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

router.get("/",(req,res) => {
console.log("Here");
res.send("Andrew's Landing Page!");
})

router.get("/form",function(req,res){
const html =
`<div id="login-form">
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
    
    request(`https://e17dn9lia3.execute-api.us-east-2.amazonaws.com/prod?email=${email}&password=${password}`,{json:true},(err,response,body)=>{
        if(err){
            return console.log(err)
        };
        if(body.Count>0){ 
            //DISPLAY VALID RESPONSE
            res.send("Your login was successful!", body);
        }else{ 
            //DISPLAY ERROR RESPONSE
            res.send("That is not an Authenticated User!")
        }
    })
})
