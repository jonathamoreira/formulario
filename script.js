const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')

form.addEventListener('submit', (e) =>{
    e.preventDefault();
});

function checkInputs() {
    const usernamevalue = username.value 
    const emailvalue = email.value 
    const passwordvalue = password.value 
    const passwordConfirmationvalue = passwordConfirmation.value 

    if( username.value === ' '){
        setErrorFor(username, 'Nome de usuário obrigatório!');
    }
}
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.query.Selector('small')

    //adicionar mensagem de erro

    
    //adicionar classe de erro

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        
        //Adicionar class sussecc
        formControl.className = 'form-control-success'
    }
}