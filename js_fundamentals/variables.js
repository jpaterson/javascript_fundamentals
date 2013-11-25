// Javascript fundamentals
// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

function fortuneTeller(numberOfChildren, partnersName, GeographicLocation, profession){
	 document.write("You will be a " + profession + "in " + GeographicLocation + "and married to " + partnersName + "with " + numberOfChildren + "kids.");
};

fortuneTeller(10, "Shrek", "Canada", "Professional Weaver");

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
var CurrentYear = 2013;

// Store their birth year in a variable.
var Birth = 1989;

// document.write("They are either " CurrentYear - Birth "or " CurrentYear - Birth + 1)

// Calculate their 2 possible ages based on the stored values.

document.write("They are either " + (CurrentYear - Birth) + " or " + (CurrentYear - Birth + 1));

// Output them to the screen like so: "They are either NN or NN", substituting the values.

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var CurrentAge = 24;
var MaxAge = 100;
var AmEst = 1;

document.write("You will need " + (MaxAge / CurrentAge * (AmEst * 365)) + "to last you until the ripe old age of " + MaxAge + ".");

// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
var radius = 20;

var circumference = (3.14*(radius*radius))

console.log("The area is " + circumference)

// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."