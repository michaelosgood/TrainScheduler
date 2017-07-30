// Michael Osgood / Train Schedule 
console.log("Page Loaded");

// Initialize Firebase
var config = {
	apiKey: "AIzaSyAitrNyAyEoM5Mo7cs5YaqPIdFo8HCbXsQ",
    authDomain: "trainscheduler-ea83f.firebaseapp.com",
    databaseURL: "https://trainscheduler-ea83f.firebaseio.com",
    projectId: "trainscheduler-ea83f",
    storageBucket: "trainscheduler-ea83f.appspot.com",
    messagingSenderId: "679724840977"
};
firebase.initializeApp(config);

// Variable to reference the database
var database = firebase.database();

// Train Object
var train = {
	name: "",
	destination: "",
	time: "",
	frequency: "",
}

// Needs to calculate when next train will arrive
// Should be relative to current time
var nextTrain = "";

// Function to add train when button is clicked
$("#addTrain").on("click", function(){
	event.preventDefault(); // Prevents page from refreshing when button is clicked
	console.log("You've Clicked Me"); // Console Log the that button has been clicked

	// Storing the data that the user inputs
	train.name = $("#name-input").val().trim();
	train.destination = $("#destination-input").val().trim();
	train.time = $("#time-input").val().trim();
	train.frequency = $("#frequency-input").val().trim();

	// Pushes our data to Firebase
	database.ref().push({ 
	    trainName: train.name,
	    trainDestination: train.destination,
	    trainTime: train.time,
	    trainFrequency: train.frequency,
    });
});
