// Michael Osgood / Train Schedule 
console.log("Page Loaded");
console.log(moment().format("HH:mm")); // Console logs date and time in 24 hour format
console.log(moment().startOf('hour').fromNow()); // Console logs minutes from now

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


// Function to add train when button is clicked
$("#addTrain").on("click", function(){
	event.preventDefault(); // Prevents page from refreshing when button is clicked
	console.log("Submit Button Clicked"); // Console Log the that button has been clicked

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

// Used to pull data from Firebase
database.ref().on("child_added", function(snapshot) {
  console.log(snapshot.val());

  // Appending the data from Firebase to our table on HTML
  $("#trainTable").append("<tr><td>"+
  	snapshot.val().trainName+"</td><td>"+
  	snapshot.val().trainDestination+"</td><td>"+
  	snapshot.val().trainFrequency+"</td></tr>");
});


// Need to find  a way to get the first train time format changed to military time

// Need to create a variable to capture first train time

// Need a variable to capture train frequency 

// Need a nextArrival variable
// Need a minutesAway variable
// use train frequency and first train time variables 
// to calculate next train arrival time relative to current time

// Need to append next arrival time on the trainTable

// Need to append minutes away on the trainTable




