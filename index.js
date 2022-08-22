// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    // console.log("The DOM has loaded")
    
    let innerTect = document.getElementById("text");
    innerTect.textContent = "This is really cool!" // can also use innerHTML
});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );
