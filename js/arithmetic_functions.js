// all code is written by me, i didn't take any reference.

// Addition
function Addition(input1, input2){
    var answer = parseInt(input1) + parseInt(input2);
    document.getElementById("answerofadd").innerText = answer;
    console.log("Adding " + input1 + " + " +  input2 + " ---> " + answer);
    return answer;
}

// Subtraction
function Subtraction(input1, input2){
    var answer = parseInt(input1) - parseInt(input2);
    document.getElementById("answerofsubtraction").innerText = answer;
    console.log("Subtraction " + input1 + " + " +  input2 + " ---> " + answer);
    return answer;
}

// Multiplication
function Multiplication(input1, input2){
    var answer = parseInt(input1) * parseInt(input2);
    document.getElementById("answerofmultiplication").innerText = answer;
    console.log("Multiplication " + input1 + " + " +  input2 + " ---> " + answer);
    return answer;
}

// Division
function Division(input1, input2){
    var answer = parseInt(input1) / parseInt(input2);
    document.getElementById("answerofdivision").innerText = answer;
    console.log("Division " + input1 + " + " +  input2 + " ---> " + answer);
    return answer;
}

/* 
All the below answers are taken from the Lab 2 document provide by prof and TAs.

Q. What is the scope of a const variable?
Ans. The scope of a 'const' variable is defined as a block scope. They can re-declared and Re-assigned.

Q. When were the let and const keywords added to JavaScript?
Ans. the let and const Keywords added to Javascript in 2015 (ES6)

*/