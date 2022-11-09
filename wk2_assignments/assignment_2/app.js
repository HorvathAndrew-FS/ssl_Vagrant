const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');

http.createServer(function(req, res){
    var parsed = url.parse(req.url);
    var filename = path.parse(parsed.pathname);

    //ternary conditionals to check file names, extension and directory paths
    filen = filename.name==""?"index":filename.name;
    ext = filename.ext==""?".html":filename.ext;
    dir = filename.dir=="/"?"":filename.dir+"/";
    page = filename.name==""?"index.html":filename.name;
    
    //removing the backslash at the beginning of the directory as it is not needed
    f = (dir+filen+ext).replace("/","");

    //checking the file extension and what type of file it is
    var mimeTypes = {
        '.html': ['text/html',""],
        '.js': ['text/javascript',""],
        '.css': ['text/css','utf8'],
        '.png': ['image/png','Base64'],
        '.jpg': ['image/jpeg','Base64'],
        ".ico": ['image/x-icon','Base64'],
        '.gif': ['image/gif','Base64'],
    };

    if(f){
        fs.readFile(f, function(err,data){
                res.writeHead(200, {'Content-Type': mimeTypes[ext][0]});
                    //checking the fiel extension, adding the script to html files for navigation highlighting
                    if(ext==".html"){
                        res.write("<script>var page='"+filen+"';</script>")
                    }
                       res.end(data, mimeTypes[ext][1]);
        })
    }

}).listen("8080", function(){
    console.log("info", "Server is running on port : " + 8080);
})