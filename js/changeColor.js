const colors = ["#3498db", "#e74c3c", "#2ecc71", "#f39c12", "#9b59b6"];

function changeBackgroundColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("changeColorSection").style.backgroundColor = randomColor;
}

document.getElementById("colorButton").addEventListener("click", changeBackgroundColor);