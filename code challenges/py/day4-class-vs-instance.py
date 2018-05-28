""" HackerRank Challenge: Day 4: Class vs. Instance (30 Days of Code)
https://www.hackerrank.com/challenges/30-class-vs-instance/problem

Task
Write a Person class with an instance variable, age, and a constructor that takes an integer, initialAge, as a parameter. The constructor must assign to after confirming the argument passed as is not negative; if a negative argument is passed as age, the constructor should set age to 0 and print 'Age is not valid, setting age to 0.'. In addition, you must write the following instance methods:

    yearPasses() should increase the instance variable by 1.
    amIOld() should perform the following conditional actions:
        If age < 13, print 'You are young.'.
        If age >= 13 and age < 18, print 'You are a teenager.'.
        Otherwise, print 'You are old.'.

Input Format

Input is handled for you by the stub code in the editor.

The first line contains an integer T, (the number of test cases), and the subsequent lines each contain an integer denoting the of a Person instance.

Constraints

1 <= T <= 4

-5 <= age <= 30

Output Format

Complete the method definitions provided in the editor so they meet the specifications outlined above; the code to test your work is already in the editor. If your methods are implemented correctly, each test case will print or lines (depending on whether or not a valid age was passed to the constructor).

"""


class Person:
    def __init__(self,initialAge):
        if initialAge <= 30:
            if initialAge >= 0:
                self.age = initialAge
            else:
                self.age = 0
                print('Age is not valid, setting age to 0.')
        else:
            print('Entry not valid.')
    def amIOld(self):
        if self.age < 13:
            print('You are young.')
        elif self.age >= 13 and self.age < 18:
            print('You are a teenager.')
        else:
            print('You are old.')
    def yearPasses(self):
        self.age += 1
t = int(input())
for i in range(0, t):
    age = int(input())         
    p = Person(age)  
    p.amIOld()
    for j in range(0, 3):
        p.yearPasses()       
    p.amIOld()
    print("")
