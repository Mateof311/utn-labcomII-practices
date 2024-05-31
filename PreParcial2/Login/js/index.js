const selectGender = document.getElementById('gender');
const iconGender = document.getElementById('icon-gender');
const imageGender = document.getElementById('img-gender');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const buttonShowPassword = document.getElementById('btn-show-password');
const divResultMessages = document.getElementById('result-messages');

/*
selectGender.onchange = function (select) {
    // Cambio la clase del ícono para cambiar el ícono en sí
    // select.target.value o selectGender.value
    switch (selectGender.value) {
        case "FEMALE":
            iconGender.className = "fas fa-female"
            break;
        case "MALE":
            iconGender.className = "fas fa-male"
            break;
        case "OTHER":
            iconGender.className = "fas fa-smile"
            break;
        default:
            iconGender.className = "fas fa-user-circle"
            break;
    }
}

/* CAMBIO IMAGEN EN EL CHANGE DEL SELECT */
selectGender.onchange = function (select) {
    imageGender.src = "img/gender/" + select.target.value + ".svg";
}
/**
 * Función que se dispara cuando el usuario hace
 * click en el botón "Ingresar"
 */
function onClickBtnEntry() {
    divResultMessages.style.display = 'none';

    // Realizo validaciones
    let stringValidations = '';
    if (!validateSelectGender(selectGender.value)) {
        stringValidations += '<p class="error">Ingresar un valor en el select del genero</p>';
    }

    if (!validateEmail(inputEmail.value)) {
        stringValidations += '<p class="error">Ingresar un email válido</p>';
    }

    // TODO: realizar validación de PASSWORD (min:6, max:20)
    if(!validatePassword(inputPassword.value)){
        stringValidations += '<p class="error">Ingresar password valida (entre 6 y 20 carac)</p>'
    }

    

    if (stringValidations !== '') {
        showResultMessages(stringValidations);
        return;
    }

    // Muestro los valores ingresados por el usuario
    showResultMessages('<p class="success">Bienvenido ' + inputEmail.value + '!!</p>');
}

/**
 * Función que se dispara cuando el usuario hace
 * click en el botón de mostrar/ocultar contraseña
 */
function onClickBtnShowPass() {
    // Si el type de inputPasswordent es password
    if (inputPassword.getAttribute('type') === 'password') {
        // cambio a type text el input de password
        inputPassword.setAttribute('type', 'text');
        // cambio texto del botón
        buttonShowPassword.innerText = "Ocultar contraseña";
    } else {
        // cambio a type password el input de password
        inputPassword.setAttribute('type', 'password');
        // cambio texto del botón
        buttonShowPassword.innerText = "Mostrar contraseña";
    }
}

function validateSelectGender(gender) {
    return gender !== "";
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function validatePassword(password){
    return ((password.length >= 6) && (password.length <= 20))
}

function showResultMessages(strResult) {
    divResultMessages.innerHTML = strResult;
    divResultMessages.style.display = 'block';
}