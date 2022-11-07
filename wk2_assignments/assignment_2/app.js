const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');

http.createServer(function(req, res){
        
    let parsed = url.parse(req.url);
    let filename = path.parse(parsed.pathname);
    
    filen = filename.name == "" ? "index":filename.name;
    ext = filename.ext == "" ? ".html":filename.ext; 
    dir = filename.dir == "/" ? "":filename.dir + "/";
    page = filename.name == "" ? "index.html":filename.name;

    console.log("File", filen);
    console.log("Ext", ext);
    console.log("Dir", dir);
    console.log("Page", page);

    f = (dir + filen + ext).replace("/", "");
    console.log("checking F", f);
    
    let mimeTypes = {
        'html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
    };

    if(f){
        console.log("if statement")
            fs.readFile(f, function(err,data){
                if(page){
                    if(mimeTypes.hasOwnProperty(ext)){
                        console.log(mimeTypes[ext]);
                        res.writeHead(200, { 'Content-Type': mimeTypes[ext] });
                        res.write("<script>let page = '" + filename.name + "';</script>")
                        res.end(data, 'utf-8');
                    }
                }
            })
        }
    }).listen("8080", function(){
        console.log("info", 'Server is at port: ' + 8080);
    })