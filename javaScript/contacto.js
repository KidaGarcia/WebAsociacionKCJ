const boxForm = document.querySelector('.boxForm');
const boxRegistro = document.querySelector('.boxRegistro');
const boxLogRegistro = document.querySelector('.boxLogRegistro');

boxLogRegistro.addEventListener('click', ()=> {
    boxForm.classList.add('active');
})

boxRegistro.addEventListener('click', ()=> {
    boxForm.classList.remove('active');
})

