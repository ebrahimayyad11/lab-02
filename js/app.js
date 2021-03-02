'use strict';

let arr = [];

confirm("Hello.. lets start the guessing Questions:");

// the first question that the user should guess
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


// the second question that the user should guess
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

// the third question that the user should guess
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



// the 4th question that the user should guess
let major = prompt("Is my major is software engineering? \n Answer with: \n yes(Y) or no(N)");
let t = 0;
    while (t === 0){
        if (major.toLowerCase() === "yes" || major.toLowerCase() === "y"){
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


// the 5th question that the user should guess
let gpa = prompt("Is my college GPA = 2.3? \n Answer with: \n yes(Y) or no(N)");
let o = 0;
    while (o === 0){
        if (gpa.toLowerCase() === "yes" || gpa.toLowerCase() === "y"){
            alert("your answer is correct");
            console.log("the 5th your answer is correct");
            o = 1;
            counter++;
        }else if (gpa.toLowerCase() === "no" || gpa.toLowerCase() === "n"){
            alert("your answer is incorrect my GPA = 2.3");
            console.log("the 5th your answer is incorrect"); 
            o = 1;           
        }else {
            gpa = prompt("Is my college GPA = 2.3? \n please just answer with \n yes(Y) or no(N)");
        }
    }


// hte 6th question that the user should guess
let years;
let r = 0;
let counterQ6 = 0;
    do {
        years =parseInt(prompt("How many years have you studied at university? \n Answer with a number"));
        if (years === 4){
            alert("your answer is correct");
            console.log("the 6th your answer is correct");
            r = 1;
            counter++;
        }else if (years === 5){
            alert("your answer is higher than the correct answer but its very close");
            years =parseInt(prompt("How many years have you studied at university? \n Answer with a number"));
            counterQ6 += 1;           
        }else if (years === 3){
            alert("your answer is lower than the correct answer but its very close");
            years =parseInt(prompt("How many years have you studied at university? \n Answer with a number"));
            counterQ6 += 1;          
        }else if (years < 3 ){
            alert("your answer is too low than the correct answer");
            years =parseInt(prompt("How many years have you studied at university? \n Answer with a number"));
            counterQ6 += 1;          
        }else if (years > 5 ){
            alert("your answer is too high than the correct answer");
            years =parseInt(prompt("How many years have you studied at university? \n Answer with a number"));
            counterQ6 += 1;           
        }else {
            alert("please answer with number only");
            counterQ6 += 1;
        }

        if (counterQ6 === 4){
            alert("You have Exhausted all the chances \n The correct answer is 4");
            console.log("the 6th your answer is incorrect");
            r = 1;
        }

    }while (r === 0);



    // the 7th question that the user should guess
    let uniName = ['HU','JU','PSUT','JUST','AABU','UOP','ZUJ'];
    let uni;
    let counterQ7 = 0
    let m = 0;
        do {
         uni = prompt("There are many universities that I have visited guess one of them. \n Answer the question by writing the abbreviation of the name of the university ").toUpperCase();
          switch(uni){
              case uniName[0] : alert("your answer is correct GOOD JOB");
              console.log("the 7th your answer is correct");
              m = 1;
              counter++
              break;

              case uniName[1] : alert("your answer is correct GOOD JOB");
              console.log("the 7th your answer is correct");
              m = 1;
              counter++
              break;

              case uniName[2] : alert("your answer is correct GOOD JOB");
              console.log("the 7th your answer is correct");
              m = 1;
              counter++
              break;

              case uniName[3] : alert("your answer is correct GOOD JOB");
              console.log("the 7th your answer is correct");
              m = 1;
              counter++
              break;

              case uniName[4] : alert("your answer is correct GOOD JOB");
              console.log("the 7th your answer is correct");
              m = 1;
              counter++
              break;

              case uniName[5] : alert("your answer is correct GOOD JOB");
              console.log("the 7th your answer is correct");
              m = 1;
              counter++
              break;

              case uniName[6] : alert("your answer is correct GOOD JOB");
              console.log("the 7th your answer is correct");
              m = 1;
              counter++
              break;

              default : alert("Incorect Answer");
              counterQ7 += 1;;
              break;
          }

          if (counterQ7 === 6){
              alert("You have Exhausted all the chances \n The correct answers are: \n"+ uniName);
              console.log("the 7th your answer is incorrect");
              m = 1;
          }
        }while (m === 0);

    
    let counter1 = 7-counter;
    

    if (counter === 1){
        alert("you have answerd "+counter+" questione with a correct answer");
    }else {
        alert("you have answerd "+counter+" questiones with a correct answer");
    }




document.getElementById("answers").innerHTML = "The correct answers = "+counter+" The incorrect answers = "+counter1;










