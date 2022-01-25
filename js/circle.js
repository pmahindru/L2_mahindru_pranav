// all code is written by me, i didn't take any reference.

// this is hardcode value of radius
function circle(){
    const area_of_circle = 3.14 * 6 * 6; 
    document.getElementById("answerforarea_of_circle").innerText = area_of_circle;
    console.log("Area of a Circle with a Radius of 6 --> " + area_of_circle);
}

// for the user inputs
function areaOfCircle(circle_radius_value){
    const answer = 3.14 * parseInt(circle_radius_value) * parseInt(circle_radius_value);
    document.getElementById("answerforareaofircle").innerText = answer;
    console.log("Area of a Circle with a Radius of " + circle_radius_value + " --> " + answer);
    return answer;
}

/* 
All the below answers are taken from the Lab 2 document provide by prof and TAs.

Q. What is the scope of a const variable?
Ans. The scope of a 'const' variable is defined as a block scope. They can re-declared and Re-assigned.

Q. When were the let and const keywords added to JavaScript?
Ans. the let and const Keywords added to Javascript in 2015 (ES6)

*/