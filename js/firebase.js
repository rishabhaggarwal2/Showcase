var config = {
    apiKey: "AIzaSyBb8PzIF3-Dz26htyuTHuGonXj5ZMO9-z8",
    authDomain: "showcase-7719f.firebaseapp.com",
    databaseURL: "https://showcase-7719f.firebaseio.com",
    storageBucket: "",
  };
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

function writeEventData(name, location, time, date, imageUrl, mapData, booths) {
  firebase.database().ref('events/' + name).set({
    location: location,
    time: time,
    date: date,
    picture: imageUrl,
    mapData: mapData,
    boothCount: 0
    //booths: booths?
  });
}

function addNewBooth(boothName,FBlink,tags,gridLocation,eventName) {
  // A post entry.
  var postData = {
    boothName: boothName,
    FBlink: FBlink,
    tags: tags,
    gridLocation: gridLocation,
    eventName: eventName
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('booths').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/booths/' + newPostKey] = postData;
  //updates['/user-posts/' + uid + '/' + newPostKey] = postData;?

  return firebase.database().ref().update(updates);
}