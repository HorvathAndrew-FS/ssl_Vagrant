import Grader
import sys

name = raw_input("What is your name? ")
assignment = raw_input("What assignment is this for? ")
grade = raw_input("What is your grade for " + assignment + "? ")

obj = Grader.Grader()
returnData = obj.lettergrade(grade)

print(name + "@fullsail.edu")
print ("Your grade for " + assignment + " is: " + returnData["gradeLetter"] )
print (returnData["feedback"])

