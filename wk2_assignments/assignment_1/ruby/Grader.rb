class Grader
    def letterGrade(gradeInput)
        gradeNum = gradeInput.to_f
        gradeLetter = ""
        feedback = ""

        if gradeNum >= 90
            gradeLetter = "A"
            feedback = "You completed the requirements for the assignment, Great Job!"
        elsif gradeNum >= 80
                gradeLetter = "B"
                feedback = "You have a few small errors in your code."
        elsif gradeNum >= 70
                gradeLetter = "C"
                feedback = "You are missing a requirement(s) for the assignment"
        elsif gradeNum >= 60
                gradeLetter = "D"
                feedback = "You are missing some requirements(s) for the assignment, and have errors."
        else
            gradeLetter = "F"
            feedback = "You did not fulfill the requirements for the assignment! Try Again."
        end

        gradeData = [gradeLetter, feedback]
        return gradeData
        end
    end   