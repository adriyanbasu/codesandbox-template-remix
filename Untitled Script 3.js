// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: yellow; icon-glyph: magic;
// Prompt the user for their name
var userName = prompt("What's your name?");

// Check if the user entered a name
if (userName !== null && userName !== "") {
    // Display a personalized greeting
    var greeting = "Hello, " + userName + "!";
    alert(greeting);
} else {
    // Handle the case where the user didn't enter a name
    alert("Hello, there!");
}
