class Grader
    def letterGrade(gradeInput)
        gradeNum = gradeInput.to_f
        gradeLetter = ""
        feedback = ""

        if gradeNum >= 90
            gradeLetter = "A"
            feedback = "You completed the requirements for the assignment, Great Job!"
        else
            gradeLetter = "F"
            feedback = "You did not fulfill the requirements for the assignment! Try Again."
        end

        gradeData = [gradeLetter, feedback]
        return gradeData
        end
    end   