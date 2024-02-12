


function mostrarDND(){
    var mostrarDND = document.getElementById("mostrarDND");
        if (mostrarDND.style.display === "none") {
            mostrarDND.style.display = "block";
            document.getElementById("mostrarVampiro").style.display = "none";
            document.getElementById("mostrarLlamada").style.display = "none";

        } else {
            mostrarDND.style.display = "none";

        }
      
}

function mostrarVampiro(){
    var mostrarVampiro = document.getElementById("mostrarVampiro");
    if (mostrarVampiro.style.display === "none") {
        mostrarVampiro.style.display = "block";
        document.getElementById("mostrarDND").style.display = "none";
        document.getElementById("mostrarLlamada").style.display = "none";
    } else {
        mostrarVampiro.style.display = "none";
    }
  
}
function mostrarLlamada(){
    var mostrarLlamada = document.getElementById("mostrarLlamada");
    if (mostrarLlamada.style.display === "none") {
        mostrarLlamada.style.display = "block";
        document.getElementById("mostrarDND").style.display = "none";
        document.getElementById("mostrarVampiro").style.display = "none";
    } else {
        mostrarLlamada.style.display = "none";
    }
  
}
