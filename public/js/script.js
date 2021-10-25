window.addEventListener('load', function () {
    //////////////////////////////
    // VALIDACIONES LOGIN FORM //
    /////////////////////////////

    let loginForm = document.querySelector('form.login');
    let errorEmail = document.querySelector('.email-validation')
    let errorPass = document.querySelector('.pass-validation')

    loginForm.addEventListener('submit', function (e) {
        
        
        let loginEmail = document.querySelector("#loginEmailInput")
        if (loginEmail.value == "") {
            e.preventDefault()
            errorEmail.style.display = "block"
            errorEmail.innerText = "Debes ingresar una dirección de correo válida"            
        } else {
            errorEmail.style.display = "none"
        }

        let loginPass = document.querySelector("#loginContraseña")
        if (loginPass.value == "") {
            e.preventDefault()
            errorPass.style.display = "block"
            errorPass.innerText = "Debes ingresar tu contraseña"
        } else {
            errorPass.style.display = "none"
        }

    })
    ////////////////////////////////
    // VALIDACIONES REGISTER FORM //
    ////////////////////////////////

    let registerForm = document.querySelector('form.register')
    let reEmail = document.querySelector('#registroConfirmEmail')
    let email = document.querySelector('#registroEmail')
    let pass = document.querySelector('#registroContraseña')
    let rePass = document.querySelector('#registroConfirmaContraseña')
    let passCheck = document.querySelector('.register-pass-rePass')
    let emailCheck = document.querySelector('.register-email-reEmail')
    let avatar = document.querySelector('#avatar')
    let avatarCheck = document.querySelector('.register-avatar')

    registerForm.addEventListener('submit', function (e) {
        if (pass.value != rePass.value) {
            e.preventDefault();
            passCheck.style.display = "block"
            passCheck.innerText = "Las contraseñas no coinciden"
        } else {
            passCheck.style.display = "none"
        }
        if (email.value != reEmail.value) {
            e.preventDefault();
            emailCheck.style.display = "block"
            emailCheck.innerText = "Los emails no coinciden"
        } else {
            passCheck.style.display = "none"
        }
        if (avatar.value == '') {
            e.preventDefault();
            avatarCheck.style.display = "block"
            avatarCheck.innerText = "Tu foto de perfil no se cargó correctamente"
        } else {
            avatarCheck.style.display = "none"
        }

    })
    

})
