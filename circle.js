// all code is written by me, i didn't take any reference.

// this is hardcode value of radius
const area_of_circle = 3.14 * 6 * 6; 
document.getElementById("answerforarea_of_circle").innerText = area_of_circle;
console.log("Area of a Circle with a Radius of 6 --> " + area_of_circle);

// for the user inputs
function areaOfCircle(circle_radius_value){
    const answer = 3.14 * parseInt(circle_radius_value) * parseInt(circle_radius_value);
    document.getElementById("answerforareaofircle").innerText = answer;
    console.log("Area of a Circle with a Radius of " + circle_radius_value + " --> " + answer);
    return answer;
}