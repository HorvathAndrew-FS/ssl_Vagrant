class Grader:
    def __init__(self, gradeLetter, feedback):
        self.grade = gradeLetter
        self.feedback = feedback

        def get_lettergrade(self, gradeInput):
            if gradeInput >= 90:
                gradeLetter = "A"
                feedback = "You completed the requirements for the assignment, Great Job!"
            else:
                feedback = "Please try again."

                return [gradeLetter, feedback]
