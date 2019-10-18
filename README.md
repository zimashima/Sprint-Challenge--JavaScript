# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your team lead

1. Describe the biggest difference between `.forEach` & `.map`.

        The biggest difference between the two is that: 
            .forEach() will iterate over each item in an array and complete the instruction individually
            .map() will iterate over the whole array and complete the action on all array or as instructed

2. What is the difference between a function and a method?

        A method is a function created as a value of a key inside an object. Thus, it can be invoked called by using dot(.) after an object.
        A function is created separately and is not tied to any specific objects like method.

3. What is closure?

        In order to understand closures, it is important to understand scope. When a scope is declared, variables and functions will belong inside of it.
        The main biggest scope is the global scope where all other function can be created and executed inside of this scope.
        When a function is created, a new scope is created, so does a closure. This scope is called a local scope. Any other function nested in or variables that are created within that function belongs to that scope, and this is the context where the function execution of that scope happens. 
        When another function is created, the same thing happens. There will be another scope inside of that scope, and any execution of function happes within that scope.

        When a function is excecuted, it will look for the variables inside of a scope first, however, if that variable doesn't exist inside of a scope, it will look for that variable in the outer scope. And then outer and outer scopes. Closures are pretty much a function insides of a function, and it can takes value from the scope greater than its own.

4. Describe the four rules of the 'this' keyword.

        1) Window binding
        it is when this is used in global scope, this will bind to window. Window value could be anything. If use with strict mode, it will return undefined, otherwise, it will return window
        
        2) Implicit binding
        It is when the value of the key in an object is a function, and when the function is invoked, the value that 'this' refers to will be on the left of the dot. 
        In other words, this refers to values inside that object scope where the function was created.

        3) New binding
        New binding relates to consturctor function. 
        When an object is created using keyword 'new' follows by a constructor function, 'this' will bind to this new object that is just created 
        
        4) Explicit binding
        When .call() or .apply() method is used, 'this' will be defined explicitly

5. Why do we need super() in an extended class?

        Super allows child class to access key:value constructor and the method in parent class. While keyword extends point the child class where its parent class is, super has to be used inseparably in order to inherit the constructor and functions stored in parent class.
        



## Project Set up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add TL as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [ ] You are now ready to build this project with your preferred IDE
- [ ] Implement the project on your Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your team lead as a Reviewer on the Pull-request
- [ ] TL then will count the HW as done by  merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [ ] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [ ] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
