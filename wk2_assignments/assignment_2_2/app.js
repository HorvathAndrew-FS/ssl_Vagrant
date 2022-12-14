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

    //f = "assets/img/bg.jpg"

    console.log("f = ", f)

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
            
            // if(ext == ".html"){
            //     if(page){
            //         if(mimeTypes.hasOwnProperty(ext)){

            //             res.writeHead(200, {'Content-Type': mimeTypes[ext]});
            //             res.end(data);
            //         }
            //     }
            // }else{
                res.writeHead(200, {'Content-Type': mimeTypes[ext][0]});
                    
                    if(ext==".html"){
                        res.write("<script>var page='"+filen+"';</script>")
                    }

                       
                       res.end(data, mimeTypes[ext][1]);
                    //}
            //}

        })
    }

}).listen("8080", function(){
    console.log("info", "Server is running on port : " + 8080);
})