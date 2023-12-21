

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAwvWDWFR8xlB8bW_tZchy5yj5mMFdkPbY",
  authDomain: "proyecto9-d001e.firebaseapp.com",
  databaseURL: "https://proyecto9-d001e-default-rtdb.firebaseio.com",
  projectId: "proyecto9-d001e",
  storageBucket: "proyecto9-d001e.appspot.com",
  messagingSenderId: "508082530654",
  appId: "1:508082530654:web:cb14cf8beeb0989d8807cf"
};
firebase.initializeApp(firebaseConfig);
nombre_usuario = localStorage.getItem("nombre_usuario");
document.getElementById("nombre_usuario").innerHTML = "Hola bienvenido " + nombre_usuario;

function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach( function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row; }); }); }

function adduser()
{
    nombre_usuario = document.getElementById("nombre_usuario").value;

    firebase.database().ref("/").child(nombre_usuario).update({
        purpose : "adding user"
    });

    window.location.replace("warzon_room.html");

}


  