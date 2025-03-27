const c = document.getElementById("myCanvas");
const painter = c.getContext("2d");

c.width = 900;
c.height = 350;

let circlePositionX = 140;
let circlePositionY = c.height / 2;
let circleSize = 100;
let circleColor = "#0000FF"; // Blue color
let circleBorderWidth = "3";

let arrowPositionX = 800;
let arrowPositionY = circlePositionY;
let arrowLength = 40;
let arrowThickness = 3;
let isArrowMoving = false;

function drawEverything() {
    painter.clearRect(0, 0, c.width, c.height);
    
    painter.fillStyle = circleColor;
    painter.beginPath();
    painter.arc(circlePositionX, circlePositionY, circleSize, 0, Math.PI * 2);

    painter.lineWidth = circleBorderWidth;
    painter.strokeStyle = "black";
    painter.stroke();

    painter.fillStyle = circleColor;
    painter.fill();
    
    // Arrow drawing code 
    painter.fillStyle = "black";
    painter.fillRect(arrowPositionX, arrowPositionY - arrowThickness / 2, arrowLength, arrowThickness);

    painter.beginPath();
    painter.moveTo(arrowPositionX, arrowPositionY); // Tip of the arrow
    painter.lineTo(arrowPositionX + 15, arrowPositionY - 12); // Top point
    painter.lineTo(arrowPositionX + 15, arrowPositionY + 12); // Bottom point
    painter.closePath();
    painter.fill();
}

// Function to make the arrow move
function moveTheArrow() {
    if (arrowPositionX > circlePositionX + circleSize) {
        arrowPositionX -=5; // Move arrow left
        drawEverything();
        requestAnimationFrame(moveTheArrow);
    } else {
        isArrowMoving = false;
        circleColor = "#FFFF00"; // Yellow color
        drawEverything();
    }
}

// when hit button is clicked
document.getElementById("hitButton").addEventListener("click", function() {
    if (!isArrowMoving) {
        isArrowMoving = true;
        moveTheArrow();
    }
});

//when reset button is clickd
document.getElementById("resetButton").addEventListener("click", function() {
    arrowPositionX = 800;
    circleColor = "#0000FF"; //blue color
    drawEverything();
});

//drawingEverthing during reload
drawEverything();