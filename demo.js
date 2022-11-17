"use strict"

const express= require("express");
const request = require("request");
const app = express();
const router = express.Router();

router.get("/",function(req,res){
console.log("Here");
res.send("Hello by Andrew");
})

app.use(("/", router))
const port = 8080;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});