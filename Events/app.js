const box = document.getElementById("box");

box.addEventListener("mouseover", function() {
    box.style.backgroundColor = "blue";
});

box.addEventListener("mouseout", function() {
    box.style.backgroundColor = "white";
});


const button = document.getElementById("button");

let clickCount = 0;

button.addEventListener("click", function(event) {
    clickCount++;
    button.textContent = `Clicked ${clickCount} times!`;

    console.log("Event object:", event);
});


