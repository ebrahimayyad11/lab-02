'use strict';


confirm("Hello.. lets start the guessing Questions:");

// the first questions that the user should answer
let Name = prompt("Is my name Ebrahim? \n Answer with: \n yes(Y) or no(N)");
let i = 0;
let counter = 0;
    while (i == 0){
        if (Name.toLowerCase() == "yes" || Name.toLowerCase() == "y"){
            alert("your answer is correct");
            console.log("the first your answer is correct");
            i = 1;
            counter++;
        }else if (Name.toLowerCase() == "no" || Name.toLowerCase() == "n"){
            alert("your answer is incorrect my name is ebrahim");
            console.log("the first your answer is incorrect"); 
            i = 1;           
        }else {
            Name = prompt("Is my name Ebrahim? \n please just answer with \n yes(Y) or no(N)");
        }
    }


// the second questions that the user should answer
let age = prompt("Am I 26 years old? \n Answer with: \n yes(Y) or no(N)");
let j = 0;
    while (j == 0){
        if (age.toLowerCase() == "yes" || age.toLowerCase() == "y"){
            alert("your answer is incorrect my old is 24");
            console.log("the second your answer is incorrect "); 
            j = 1;
        }else if (age.toLowerCase() == "no" || age.toLowerCase() == "n"){
            alert("your answer is correct");
            console.log("the second your answer is correct");
            j = 1;
            counter++;           
        }else {
            age = prompt("Am I 26 years old? \n please just answer with \n yes(Y) or no(N)");
        }
    }

// the third questions that the user should answer
let university = prompt("Did I study at the University of Jordan? \n Answer with: \n yes(Y) or no(N)");
let h = 0;
    while (h == 0){
        if (university.toLowerCase() == "yes" || university.toLowerCase() == "y"){
            alert("your answer is incorrect I studied in The Hashemite University");
            console.log("the third your answer is incorrect"); 
            h = 1;
        }else if (university.toLowerCase() == "no" || university.toLowerCase() == "n"){
            alert("your answer is correct");
            console.log("the third your answer is correct");
            h = 1;
            counter++;           
        }else {
            university = prompt("Did I study at the University of Jordan? \n Am I 26 years old? \n please just answer with \n yes(Y) or no(N)");
        }
    }



// the 4th questions that the user should answer
let major = prompt("Is my major is software engineering? \n Answer with: \n yes(Y) or no(N)");
let t = 0;
    while (t == 0){
        if (major.toLowerCase() == "yes" || major.toLowerCase() == "y"){
            alert("your answer is correct");
            console.log("the 4th your answer is correct");
            t = 1;
            counter++;
        }else if (major.toLowerCase() == "no" || major.toLowerCase() == "n"){
            alert("your answer is incorrect I studied software engineering");
            console.log("the 4th your answer is incorrect"); 
            t = 1;           
        }else {
            major = prompt("Is my major is software engineering? \n Am I 26 years old? \n please just answer with \n yes(Y) or no(N)");
        }
    }


// the 5th questions that the user should answer
let gpa = prompt("Is my college GPA = 2.3? \n Answer with: \n yes(Y) or no(N)");
let o = 0;
    while (o == 0){
        if (major.toLowerCase() == "yes" || major.toLowerCase() == "y"){
            alert("your answer is correct");
            console.log("the 5th your answer is correct");
            o = 1;
            counter++;
        }else if (major.toLowerCase() == "no" || major.toLowerCase() == "n"){
            alert("your answer is incorrect my GPA = 2.3");
            console.log("the 5th your answer is incorrect"); 
            o = 1;           
        }else {
            gpa = prompt("Is my college GPA = 2.3? \n please just answer with \n yes(Y) or no(N)");
        }
    }


    
    let counter1 = 5-counter;

document.getElementById("answers").innerHTML = "The correct answers = "+counter+" The incorrect answers = "+counter1;










