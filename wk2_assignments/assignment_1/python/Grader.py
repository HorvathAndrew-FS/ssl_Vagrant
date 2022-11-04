class Grader:
        def lettergrade(self, gradeInput):
            gradeNum = float(gradeInput)
            gradeLetter = ""
            feedback = ""
            if gradeNum >= 90:
                gradeLetter = "A"
                feedback = "You completed the requirements for the assignment, Great Job!"
            elif gradeNum >= 80:
                gradeLetter = "B"
                feedback = "You have a few small errors in your code."
            elif gradeNum >= 70:
                gradeLetter = "C"
                feedback = "You are missing a requirement(s) for the assignment"
            elif gradeNum >= 60:
                gradeLetter = "D"
                feedback = "You are missing some requirements(s) for the assignment, and have errors."
            else:
                gradeLetter = "F"
                feedback = "You did not fulfill the requirements for the assignment! Try Again."
            
            gradeObj = {"gradeLetter": gradeLetter, "feedback": feedback}
            return gradeObj
