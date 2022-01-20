// all code is written by me, i didn't take any reference.

// this is hardcode value of width and length
const area_of_rectangle =  20 * 15; 
document.getElementById("answerforarea_of_rectangle").innerText = area_of_rectangle;
console.log("Area of a Rectangle with a Length of 20, and Width of 15 --> " + area_of_rectangle);

// for the user inputs
function Rectangle(width, length){
    const answer = parseInt(width) * parseInt(length);
    document.getElementById("answerofrectangle").innerText = answer;
    console.log("Area of a Rectangle with a Length of " + length + " Width of " + width + " --> " + answer);
    return answer;
}

/* 
All the below answers are taken from the Lab 2 document provide by prof and TAs.

Q. What is the scope of a const variable?
Ans. The scope of a 'const' variable is defined as a block scope. They can re-declared and Re-assigned.

Q. When were the let and const keywords added to JavaScript?
Ans. the let and const Keywords added to Javascript in 2015 (ES6)

*/