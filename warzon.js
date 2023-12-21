function adduser()
{
    nombre_usuario = document.getElementById("nombre_usuario").value;

    firebase.database().ref("/").child(nombre_usuario).update({
        purpose : "adding user"
    });

    window.location.replace("warzon_room.html");

}

