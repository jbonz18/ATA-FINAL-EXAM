console.log("testing...");
console.log(new Date());

var sum = 1 + 1;
console.log(sum);

document.write("Hello from JavaScript");

// Body for the function
function sayHello() {

    alert("Hello!");

    var name = "John";
    
    name = {"name" : "John"};

    // Store in the variable
    name = prompt("What's your name?");

    // Define a variable, then set to getElementById
    var dynamicSection = document.getElementById("dynamicSection");
    
    var breakLine = document.createElement("br");

    // Append it to the DOM
    dynamicSection.appendChild(breakLine);

    // Append it to the DOM
    dynamicSection.append("Hello again! "  + name);
}

function paint () {
    var dynamicSection = document.getElementById("dynamicSection");

    // Instead of "background-color: red" assign it through JavaScript
    var color = document.getElementById("colorValue");

    dynamicSection.style.backgroundColor = color.value;
}

var isToggled = false;

function toggleHighlight() {
    var textSection = document.getElementById("textSection");

    //textSection.className = "highlight";

    //textSection.classList.toggle("highlight");
    //textSection.classList.remove("normal");
    isToggled = !isToggled;

    if (isToggled) {
        textSection.classList.add("highlight");
    }
    else {
        textSection.classList.remove("highlight");
    }
}

// No longer used
function untoggle() {
    var textSection = document.getElementById("textSection");

    //textSection.classList.add("normal");    
    textSection.classList.remove("highlight");
}
