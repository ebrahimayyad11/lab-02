'use strict';




function checkAnswer(q1Name,correctAnswer,showUser){
   let incorrectAnswer1 ;
   let incorrectAnswer2 ;
    let correctAnswer2;
   let answer ;
    if (correctAnswer=='yes'){
    correctAnswer2='y';
    incorrectAnswer1='no';
    incorrectAnswer2='n';

    }else{
        correctAnswer2='n';
        incorrectAnswer1='yes';
    incorrectAnswer2='y';
    }
    let i = 0;
    while (i == 0){
        if (q1Name.toLowerCase() == correctAnswer || q1Name.toLowerCase() == correctAnswer2){
            alert("your answer is correct");
           answer = 'yes';
            i = 1;
           
        }else if (q1Name.toLowerCase() == incorrectAnswer1 || q1Name.toLowerCase() == incorrectAnswer2){
            alert("your answer is incorrect " + showUser );
             answer = 'no';
             i = 1;  
                  
        }else {
          q1Name=prompt('please just answer with \n yes(Y) or no(N)');
        }
    }
   return  answer;           
}


let arr = [];
let arr2 =[];

confirm("Hello.. lets start the guessing Questions:");


let Name = prompt('Is my name Ebrahim? \n Answer with: \n yes(Y) or no(N)');
arr2.push(checkAnswer(Name,'yes','My Name Is Ebrahim'));




let counter = 0;
   

let age =prompt('Am I 26 years old? \n Answer with: \n yes(Y) or no(N)');
arr2.push(checkAnswer(age,'no','My Age Is 24'));




let university =prompt('Did I study at the University of Jordan? \n Answer with: \n yes(Y) or no(N)');
arr2.push(checkAnswer(university,'no','I studied at hashamite University'));


let major = prompt('Is my major is software engineering? \n Answer with: \n yes(Y) or no(N)');
arr2.push(checkAnswer(major,'yes','My major is software engineering '));


let gpa =prompt('Is my college GPA = 2.3? \n Answer with: \n yes(Y) or no(N)');
arr2.push(checkAnswer(gpa,'yes','my college GPA = 2.3'));



for(let i =0 ;i<arr2.length;i++){
    if(arr2[i]=='yes')
    {
        counter++;
    }

}






let years;
let r = 0;
let counterQ6 = 0;
    do {
        years =parseInt(prompt("How many years have you studied at university? \n Answer with a number"));
        if (years === 4){
            alert("your answer is correct");
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
            r = 1;
        }

    }while (r === 0);



   
    let uniName = ['HU','JU','PSUT','JUST','AABU','UOP','ZUJ'];
    let uni;
    let counterQ7 = 0
    let m = 0;
        do {
         uni = prompt("There are many universities that I have visited guess one of them. \n Answer the question by writing the abbreviation of the name of the university ").toUpperCase();
          switch(uni){
              case uniName[0] : alert("your answer is correct GOOD JOB");
              m = 1;
              counter++
              break;

              case uniName[1] : alert("your answer is correct GOOD JOB");
              m = 1;
              counter++
              break;

              case uniName[2] : alert("your answer is correct GOOD JOB");
              m = 1;
              counter++
              break;

              case uniName[3] : alert("your answer is correct GOOD JOB");
              m = 1;
              counter++
              break;

              case uniName[4] : alert("your answer is correct GOOD JOB");
              m = 1;
              counter++
              break;

              case uniName[5] : alert("your answer is correct GOOD JOB");
              m = 1;
              counter++
              break;

              case uniName[6] : alert("your answer is correct GOOD JOB");
              m = 1;
              counter++
              break;

              default : alert("Incorect Answer");
              counterQ7 += 1;;
              break;
          }

          if (counterQ7 === 6){
              alert("You have Exhausted all the chances \n The correct answers are: \n"+ uniName);
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










