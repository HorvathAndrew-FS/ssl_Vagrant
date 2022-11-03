const readline = require("readline");
Grader = require("./Grader");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("What is your name? ", (name) => {

    rl.question("What assignment is this for? ", (assignment) => {
        
        rl.question(`What is your grade for ${assignment}? `, (userGrade) => {
            let letterGrade = new Grader();

            console.log(name + "@fullsail.edu");
            console.log(`Your grade for ${assignment} is: ${letterGrade.grade(userGrade)[0]}`);
            console.log(letterGrade.grade(userGrade)[1]);
        
            rl.close();
        })
        
        
    })
})