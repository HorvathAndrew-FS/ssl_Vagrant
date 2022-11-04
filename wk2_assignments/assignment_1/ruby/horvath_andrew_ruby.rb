require "./Grader.rb"

puts "What is your name?"
name = gets
puts "What assignment is this for? "
assignment = gets
puts "What is the grade for #{assignment}? "
grade = gets

newGrade = Grader.new
returnData = newGrade.letterGrade(grade)

puts "#{name}@fullsail.edu"
puts "Your grade for #{assignment} is: #{returnData[0]}"
puts returnData[1]
