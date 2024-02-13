
  



function lanzarDados(){  //Lanzamiento de varios dados
    var numDados=parseInt(document.getElementById("numDado").value);  
    var dado= parseInt(document.getElementById("tiposDados").value); //d4,d20,etc.
    var calculo=parseInt(0);
    var dadoActual;
    var texto;
    var contador=parseInt(0);


    document.getElementById("resultadoDados").value=""; //Colocamos el valor por defecto del textarea como vacío.
    var dadoIMG=document.getElementById("dadoRotatorio");
    dadoIMG.style.animationPlayState="running";

    
    


    for(var i=0;i<numDados;i++){
        dadoActual=(parseInt(Math.random()*dado)+1);    //Cálculo de 1 dado.
        calculo+=dadoActual;                            //Suma al total
        
        texto="\nd"+ dado +" nº" + (i+1) + ": " + dadoActual + "   Suma total de: " + calculo ;

        if(dadoActual===parseInt(1)){texto+= " ¡Pifia!";} //Pifias o críticos
        if(dadoActual===dado){texto+=" ¡Crítico!"}

        document.getElementById("resultadoDados").value+=texto; // Muestra el resultado.
    
    }
    dadoIMG.style.transform

}
    function cambiarImagenDND(){
        var seleccion=document.getElementById("dndClasesSel");
        var imagen=document.getElementById("clasePersonaje");
        switch(seleccion.value){
                case "fighter": imagen.src="./media/DNDClasses/Warrior.png";
                break;
                case "ranger": imagen.src="./media/DNDClasses/Ranger.jpg";
                break;
                case "monk": imagen.src="./media/DNDClasses/Monk.jpg";
                break;
                case "cleric": imagen.src="./media/DNDClasses/Cleric.png";
                break;
                case "wizard": imagen.src="./media/DNDClasses/Wizard.jpeg";
                break;
                case "paladin": imagen.src="./media/DNDClasses/Paladin.png";
                break;
                case "rogue": imagen.src="./media/DNDClasses/Rogue.png";
                break;
                case "warlock": imagen.src="./media/DNDClasses/Warlock.png";
                break;
                case "bard": imagen.src="./media/DNDClasses/Bard.jpg";
                break;
                case "sorcerer": imagen.src="./media/DNDClasses/Sorcerer.png";
                break;
                case "druid": imagen.src="./media/DNDClasses/druid.png";
                break;  
        }
}
function cambiarImagenVamp(){
    var seleccion=document.getElementById("vlmClanesSel");
    var imagen=document.getElementById("familiaVampiro");
    switch(seleccion.value){
            case "brujah": imagen.src="./media/VampiroClanes/Brujah.jpg";
            break;
            
            case "nosferatu": imagen.src="./media/VampiroClanes/Nosferatu.jpg";
            break;

            case "malkavian": imagen.src="./media/VampiroClanes/Malkavian.png";
            break;

            case "toreador": imagen.src="./media/VampiroClanes/Toreador.jpg";
            break;

            case "ventrue": imagen.src="./media/VampiroClanes/Ventrue.jpg";
            break;

            case "tremere": imagen.src="./media/VampiroClanes/Tremere.jpg";
            break;
    }
}