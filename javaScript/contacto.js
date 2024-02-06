const boxForm = document.querySelector('.boxForm');
const formularioLogeo = document.querySelector('.boxLogRegistro');
const formRegistro = document.querySelector('.boxRegistro');


boxLogRegistro.addEventListener('click', ()=> {
    boxForm.classList.add('active');
})

boxRegistro.addEventListener('click', ()=> {
    boxForm.classList.remove('active');
})