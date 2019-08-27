  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC2UxCN17aIqzv75WnXFDcA3iLqCcSsKXQ",
    authDomain: "trainschedulerrr-d98f5.firebaseapp.com",
    databaseURL: "https://trainschedulerrr-d98f5.firebaseio.com",
    projectId: "trainschedulerrr",
    storageBucket: "",
    messagingSenderId: "546561228544",
    appId: "1:546561228544:web:ee86d3650d7c8c50"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

//jquery and javascript go here
//we want to make a table in firebase to hold our data which will be stored through on click functions from the html page. 
//example from in class activity in readme
//after we have our connection we also want to log the times using moment for calculating time differences and displaying them for the user
//apend results to the html page
