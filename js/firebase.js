var config = {
    apiKey: "AIzaSyBb8PzIF3-Dz26htyuTHuGonXj5ZMO9-z8",
    authDomain: "showcase-7719f.firebaseapp.com",
    databaseURL: "https://showcase-7719f.firebaseio.com",
    storageBucket: "",
  };
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

function writeEventData(name, location, time, date, fburl, imageUrl, mapData) {
  database.ref('events/' + name).set({
    name: name,
    location: location,
    time: time,
    date: date,
    fburl: fburl,
    imgurl: imageUrl,
    mapData: mapData,
    boothCount: 0
  });
}

function writeBoothData(eventName, boothName, location, fburl, categories, mapData, coords) {
  
  var postData = {
    event: eventName,
    boothName: boothName,
    location: location,
    categories: categories,
    fburl: fburl,
    mapData: coords
  };

  var newPostKey = firebase.database().ref('events/' + eventName + '/booths').push().key;
  mapData[coords.x][coords.y].booth = newPostKey;
  var gridStore = "";
  tempArray = [];
    for (var i = 0; i < mapData.length; i++) {
      tempArray[i] = [];
      for(var j = 0; j < mapData[i].length; j++){
        tempArray[i][j] = {enabled : (mapData[i][j].enabled == true ? 1 : 0), coords: mapData[i][j].coords, booth: mapData[i][j].booth || ""};
      }
    };

  gridObject = {mapdata: tempArray, start: [mapData[0][0].left, mapData[0][0].top]};
  gridStore = gridObject;
  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  var updates2 = {};
  updates2['events/' + eventName + '/mapData'] = gridStore;
  updates['events/' + eventName + '/booths/' + newPostKey] = postData;
  console.log("up", updates);
  addNewBoothToEvent(eventName);
  firebase.database().ref().update(updates2);
  return firebase.database().ref().update(updates);

}

function addNewBoothToEvent(eventName) {
  var boothCount = 0;
  database.ref('events/' + eventName + '/boothCount').once('value').then(function(snapshot){
    if(snapshot != null) {
      boothCount = snapshot.val();
      boothCount++;
      database.ref('events/' + eventName + '/boothCount').set(boothCount);
    }
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
