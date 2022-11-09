const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');

http.createServer(function(req, res){
    var parsed = url.parse(req.url);
    var filename = path.parse(parsed.pathname);

    filen = filename.name==""?"index":filename.name;
    ext = filename.ext==""?".html":filename.ext;
    dir = filename.dir=="/"?"":filename.dir+"/";
    page = filename.name==""?"index.html":filename.name;
    
    console.log("filen = ", filen);
    console.log("ext = ", ext);
    console.log("dir = ", dir);
    console.log("page = ", page);

    f = (dir+filen+ext).replace("/","");

    console.log("f = ", f)

    var mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
    };

    if(f){
        fs.readFile(f, function(err,data){
            if(page){
                if(mimeTypes.hasOwnProperty(ext)){
                    // if(ext == '.html'){
                    //     res.write("<script>var page='"+filename.name+"';</script>");
                    // }
                    console.log(mimeTypes[ext]);
                    // res.writeHead(200, {'Content-Type': mimeTypes[ext]});
                    // res.write(f);
                    // res.end(data, 'utf-8');
                }
            }
        })
    }
}).listen("8080", function(){
    console.log("info", "Server is running on port : " + 8080);
})