const typed = new Typed('.typed', {
	strings: [
		'<i class="buenosdias"></i>',
		'<i class="buenosdias">Primero que nada buenos dias</i>',
		'<i class="buenosdias">¿Os gustaría aprender de juegos de rol?</i>',
		'<i class="buenosdias">¡Vamos a ello!</i>'
	],

	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 50, // Velocidad en mlisegundos para poner una letra,
	startDelay: 0, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 50, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 0, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: false, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: false, // Mostrar cursor palpitanto
	cursorChar: '', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});


function contactos(){
	var QueContacto = document.getElementById("Contactos");
	var Opcion = QueContacto.options[QueContacto.selectedIndex].value;
	var image = document.getElementById("FotoContacto");
	var texto = document.getElementById("TextoImagen").textContent;
	texto = document.getElementById("TextoImagen").innerHTML="Hola :3";
	if (Opcion == "Asociacion") {

		image.src = "media/D20Ico.ico";
		texto = document.getElementById("TextoImagen").innerHTML="Esta página es para saber como contactarnos, puedes elegir entre contactar a Kida(La lista), a Patxecco(El vago), o a Crhis(El currante), a los que hemos creado en conjunto esta página";
	  } else if (Opcion == "Juan Antonio Sanchez Pacheco") {
  
		image.src = "./media/DruidPacheco.png";
		texto = document.getElementById("TextoImagen").innerHTML="Hola :3";
		
	  } else if (Opcion == "Crhistian Castillo Quintero") {
  
		image.src = "./media/LuchadorCrhis.png";
		texto = document.getElementById("TextoImagen").innerHTML="Hola :3";
	  }
	 else if (Opcion == "Kida Garcia Perez") {
  
		image.src = "./media/KidaWarlock.png";
		texto = document.getElementById("TextoImagen").innerHTML="Hola :3";
	  }
}
let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October', 'November', 'December'];

let currentDate = new Date();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let dates = document.getElementById('dates');
let month = document.getElementById('month');
let year = document.getElementById('year');

let prevMonthDOM = document.getElementById('prev-month');
let nextMonthDOM = document.getElementById('next-month');

month.textContent = monthNames[monthNumber];
year.textContent = currentYear.toString();

prevMonthDOM.addEventListener('click', ()=>lastMonth());
nextMonthDOM.addEventListener('click', ()=>nextMonth());



const writeMonth = (month) => {

    for(let i = startDay(); i>0;i--){
        dates.innerHTML += ` <div class="calendar__date calendar__item calendar__last-days">
            ${getTotalDays(monthNumber-1)-(i-1)}
        </div>`;
    }

    for(let i=1; i<=getTotalDays(month); i++){
        if(i===currentDay) {
            dates.innerHTML += ` <div class="calendar__date calendar__item calendar__today">${i}</div>`;
        }else{
            dates.innerHTML += ` <div class="calendar__date calendar__item">${i}</div>`;
        }
    }
}

const getTotalDays = month => {
    if(month === -1) month = 11;

    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        return  31;

    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
        return 30;

    } else {

        return isLeap() ? 29:28;
    }
}

const isLeap = () => {
    return ((currentYear % 100 !==0) && (currentYear % 4 === 0) || (currentYear % 400 === 0));
}

const startDay = () => {
    let start = new Date(currentYear, monthNumber, 1);
    return ((start.getDay()-1) === -1) ? 6 : start.getDay()-1;
}

const lastMonth = () => {
    if(monthNumber !== 0){
        monthNumber--;
    }else{
        monthNumber = 11;
        currentYear--;
    }

    setNewDate();
}

const nextMonth = () => {
    if(monthNumber !== 11){
        monthNumber++;
    }else{
        monthNumber = 0;
        currentYear++;
    }

    setNewDate();
}

const setNewDate = () => {
    currentDate.setFullYear(currentYear,monthNumber,currentDay);
    month.textContent = monthNames[monthNumber];
    year.textContent = currentYear.toString();
    dates.textContent = '';
    writeMonth(monthNumber);
}

writeMonth(monthNumber);