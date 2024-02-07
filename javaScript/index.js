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