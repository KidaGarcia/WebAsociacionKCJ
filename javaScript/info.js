
function lanzarDados(){  //Lanzamiento de varios dados
    var numDados=parseInt(document.getElementById("numDado").value);  
    var dado= parseInt(document.getElementById("tiposDados").value); //d4,d20,etc.
    var calculo=parseInt(0);
    var dadoActual;
    var texto;

    document.getElementById("resultadoDados").value=""; //Colocamos el valor por defecto del textarea como vacío.



    for(var i=0;i<numDados;i++){
        dadoActual=(parseInt(Math.random()*dado)+1);    //Cálculo de 1 dado.
        calculo+=dadoActual;                            //Suma al total
        
        texto="\nd"+ dado +" nº" + (i+1) + ": " + dadoActual + "   Suma total de: " + calculo ;

        if(dadoActual===parseInt(1)){texto+= " ¡Pifia!";} //Pifias o críticos
        if(dadoActual===dado){texto+=" ¡Crítico!"}

        document.getElementById("resultadoDados").value+=texto; // Muestra el resultado.
    }
    


    
}