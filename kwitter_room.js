
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyC8CIZOlPu4N6RuTLnIITpVgJucMozHEvk",
  authDomain: "kwitter-2cc0c.firebaseapp.com",
  databaseURL: "https://kwitter-2cc0c-default-rtdb.firebaseio.com",
  projectId: "kwitter-2cc0c",
  storageBucket: "kwitter-2cc0c.appspot.com",
  messagingSenderId: "773368439411",
  appId: "1:773368439411:web:bd85abf7d6a5fc7d2b4006",
  measurementId: "G-C3FY37TB9N"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    document.getElementById("room_name").value = "";
}


function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >" + Room_names + "</div><hr>";
            
            document.getElementById("output").innerHTML += row;
            
        });
    });

}

getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
