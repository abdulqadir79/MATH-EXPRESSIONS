////MATH EXPRESSIONS
//=====================

//1. Write a program to take a number in a variable, do the
//required arithmetic to display the following result in your
//browser:
//result : the value of a is:10

//++a
//document.write("<p>The value of ++a is: " + a + "</p>");

//a++
//document.write("<p>The original value of a is: " + a + "</p>");   
// Increment a using the post-increment operator a++
//a++;
// Display result in the browser
//document.write("<p>The value of a++ is: " + a + "</p>");

//--a
//document.write("<p>The value of --a is: " + a + "</p>");

//a--
//document.write("<p>The original value of a is: " + a + "</p>");   
// Decrement a using the post-decrement operator a--
//a--;
// Display result in the browser
//document.write("<p>The value of a-- is: " + a + "</p>");



//2.What will be the output in variables a, b & result after
//execution of the following script:
//var a = 2, b = 1;
//var result = --a - --b + ++b + b--;
//Explain the output at each stage:
//--a;
//--a - --b;
//--a - --b + ++b;
//--a - --b + ++b + b--;

//a = 0
//b = 0
//result = 2


//3. Write a program that takes input a name from user &
//greet the user.
//function greetUser() 
    // Get the input value
    //var name = document.getElementById("nameInput").value;
    
    // Greet the user
    //var greetingMessage = "Hello, " + name + "! Welcome to our website.";
    
    // Display the greeting
    //document.getElementById("greeting").textContent = greetingMessage;


    //5. Write a program to take input a number from user &
//display it’s multiplication table on your browser. If user
//does not enter a new number, multiplication table of 5
//should be displayed by default.
//function displayMultiplicationTable() 
    // Get the input value
    //var number = document.getElementById("numberInput").value;
    // Check if the input is empty or not a number
    //if (number === "" || isNaN(number)) 
      // Set default value to 5 if input is empty or not a number
     // number = 5;
    // Generate the multiplication table
    //var table = "<h3>Multiplication Table of " + number + "</h3>";
    //for (var i = 1; i <= 10; i++) 
     // table += number + " x " + i + " = " + (number * i) + "<br>";
    // Display the multiplication table
    //document.getElementById("multiplicationTable").innerHTML = table;


   // 6. Take
//a) Take three subjects name from user and store them in 3
//different variables.
//function storeSubjectNames() 
    // Get the input values
    //var subject1 = document.getElementById("subject1Input").value;
    //var subject2 = document.getElementById("subject2Input").value;
    //var subject3 = document.getElementById("subject3Input").value;

    // Display the stored subject names
    //alert("Subject 1: " + subject1 + "\nSubject 2: " + subject2 + "\nSubject 3: " + subject3);
  


//b) Total marks for each subject is 100, store it in another
//variable.
//function storeSubjectNames() 
    // Get the input values
    //var subject1 = document.getElementById("subject1Input").value;
    //var subject2 = document.getElementById("subject2Input").value;
    //var subject3 = document.getElementById("subject3Input").value;

    // Total marks for each subject
    //var totalMarks = 100;

    // Display the stored subject names and total marks
    //alert("Subject 1: " + subject1 + " (Total Marks: " + totalMarks + ")\n" + 
          //"Subject 2: " + subject2 + " (Total Marks: " + totalMarks + ")\n" + 
          //"Subject 3: " + subject3 + " (Total Marks: " + totalMarks + ")");
  



//c) Take obtained marks for first subject from user and
//stored it in different variable.
//function storeSubjectMarks() 
    // Get the input value for obtained marks
    //var subject1Marks = document.getElementById("subject1MarksInput").value;

    // Total marks for each subject
   // var totalMarks = 100;

    // Display the stored obtained marks for the first subject
   // alert("Obtained Marks for Subject 1: " + subject1Marks + "\nTotal Marks for Subject 1: " + totalMarks);
  



//d) Take obtained marks for remaining 2 subjects from user
//and store them in variables.
//function storeSubjectMarks() 
    // Get the input values for obtained marks
   // var subject1Marks = parseInt(document.getElementById("subject1MarksInput").value);
   // var subject2Marks = parseInt(document.getElementById("subject2MarksInput").value);
    //var subject3Marks = parseInt(document.getElementById("subject3MarksInput").value);

    // Total marks for each subject
   // var totalMarks = 100;

    // Display the stored obtained marks for each subject
   // alert("Obtained Marks for Subject 1: " + subject1Marks + "\nTotal Marks for Subject 1: " + totalMarks +
        //  "\nObtained Marks for Subject 2: " + subject2Marks + "\nTotal Marks for Subject 2: " + totalMarks +
        //  "\nObtained Marks for Subject 3: " + subject3Marks + "\nTotal Marks for Subject 3: " + totalMarks);
  



//e) Now calculate total marks and percentage and show the
//result in browser like this.(Hint: user table)
//function calculateResult() 
    // Get the input values for obtained marks
   // var englishMarks = parseInt(document.getElementById("subject1MarksInput").value);
    //var mathMarks = parseInt(document.getElementById("subject2MarksInput").value);
    //var urduMarks = parseInt(document.getElementById("subject3MarksInput").value);

    // Total marks for each subject
    //var totalMarks = 100;
