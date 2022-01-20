// all code is written by me, i didn't take any reference.

// this is hardcode value of radius
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