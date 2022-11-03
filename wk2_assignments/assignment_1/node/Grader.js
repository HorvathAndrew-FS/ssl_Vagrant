class Grader {
    grade = function(gradeInput){
        const gradeNum = parseInt(gradeInput);
        this.gradeLetter = "";
        this.feedback = "";
        
        if(gradeNum >= 90){
            this.gradeLetter = "A";
            this.feedback = "You completed the requirements for the assignment, Great Job!";
            
        }
        else if(gradeNum >= 80){
            this.gradeLetter = "B";
            this.feedback = "You have a few small errors in your code.";
        }
        else if(gradeNum >= 70){
            this.gradeLetter = "C";
            this.feedback = "You are missing a requirement(s) for the assignment";
        }
        else if(gradeNum >= 60){
            this.gradeLetter = "D";
            this.feedback = "You are missing some requirements(s) for the assignment, and have errors.";
        }
        else{
            this.gradeLetter = "F";
            this.feedback = "You did not fulfill the requirements for the assignment! Try Again.";
        }
        
        return [this.gradeLetter, this.feedback];
    }
}

module.exports = Grader;