// const fs = require('fs');

// fs.writeFile("mynodefile.txt", "Test String", "utf-8", function(err) {
//     console.log(err);
//     console.log("done");
// })

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("What is your name?", (name) => {

    rl.question("What is your Grade?", (grade) => {
        
        console.log(name + "@fullsail.edu");
        gradeNum = parseInt(grade);
        if (gradeNum >= 90){
            console.log("Your grade is: A");
        }
        else {
            console.log("Your grade is not passing");
        }
        
        rl.close();
    })
})