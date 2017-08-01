// Michael Osgood / Train Scheduler
// console.log("Page Loaded");
console.log(moment().format("HH:mm")); // Console logs date and time in 24 hour format
// console.log(moment().startOf('hour').fromNow()); // Console logs minutes from now

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

// I am trying to get the calculations completed in this seciton
//---------------Construction Zone---------------------------------

   // Frequency (minutes) of train
   // I am stuck at trying to get the user's frequency input and assigning 
   // it to my tFrequency variable (and should I get it from Firebase or the user?)
    var tFrequency = $("#frequency-input");
    console.log(tFrequency);

    // First train time 
    // I also need to find out how to take the user's time input and converting 
    // it to a variable 
    var firstTime = $("#time-input");


    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
//-------------------------End of Construction Zone------------------

// PSUEDOCODE
// Need to find  a way to get the first train time format changed to military time

// Need to append next arrival time on the trainTable

// Need to append minutes away on the trainTable




