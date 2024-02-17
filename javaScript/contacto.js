document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var usuarioBox = document.querySelector('#UsuarioBox').value;
    var usuarioDNI = document.querySelector('#UsuarioDNI').value;
    var usuarioMail = document.querySelector('#UsuarioMail').value;
    var contrasenaBox = document.querySelector('#contrasenaBox').value;

    alert("UsuarioBox: " + usuarioBox + "\n" +
          "UsuarioDNI: " + usuarioDNI + "\n" +
          "UsuarioMail: " + usuarioMail + "\n" +
          "ContrasenaBox: " + contrasenaBox);
});

