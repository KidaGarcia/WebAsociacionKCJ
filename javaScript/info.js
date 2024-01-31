
function lanzarDados(){
    var numDados=parseInt(document.getElementById("numDado").value);
    var dado= parseInt(document.getElementById("tiposDados").value);
    var calculo=parseInt(0);
    var dadoActual;
    var texto;

    document.getElementById("resultadoDados").value="";

    for(var i=0;i<numDados;i++){
        dadoActual=(parseInt(Math.random()*dado)+1);
        calculo+=dadoActual;
        
        texto="\nd"+ dado +" nº" + (i+1) + ": " + dadoActual + "   Suma total de: " + calculo ;

        if(dadoActual===parseInt(1)){texto+= " ¡Pifia!";}
        if(dadoActual===dado){texto+=" ¡Crítico!"}

        document.getElementById("resultadoDados").value+=texto;
    }
    
    
}