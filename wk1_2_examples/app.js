const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');

http.createServer(function(req, res){
        let parsed = url.parse(req.url);
        let filename = path.parse(parsed.pathname);
        let filen = "";

        if(filename.name == ""){
            filen = "index";
        }else{
        filen = filename.name;
        }

        
  
    fs.readFile(filen + ".html", function(err,data){
  
        res.writeHead(200);
        res.write("<script>let name = 'BIll';</script>");
        res.end(data); //header
    })
}).listen("8080")