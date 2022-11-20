"use strict"

var express= require("express");
//MISSING LIBRARY CHECK YOUR ERRORS ON THE CONSOLE
var app=express();
var router = express.Router();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended : true}));

router.get("/form",function(req,res){
var html =""; // Create your html form here
res.send(html);
})

router.post("/awsdata",function(req,res){
var email = req.body.??; // Complete the missing pieces
var password = req.body.??;// Complete the missing pieces
request("YOUR END POINT URL HERE",{json:true},(err,response,body)=>{
if(err){return console.log(err)};
if(body.Count>0){ 
//DISPLAY VALID RESPONSE
}else{ 
//DISPLAY ERROR RESPONSE
}
})
})
app.use("/",router);
app.listen("8080");