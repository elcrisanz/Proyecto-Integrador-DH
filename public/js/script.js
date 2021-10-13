window.addEventListener('load', function () {
    //////////////////////////////
    // VALIDACIONES LOGIN FORM //
    /////////////////////////////

    let loginForm = document.querySelector('form.login');
    let errorEmail = document.querySelector('.email-validation')
    let errorPass = document.querySelector('.pass-validation')
    let errors = 0

    loginForm.addEventListener('submit', function (e) {
        
        
        let loginEmail = document.querySelector("#loginEmailInput")
        if (loginEmail.value == "") {
            errorEmail.style.display = "block"
            errorEmail.innerText = "Debes ingresar una dirección de correo válida"
            errors = 1
        } else {
            errorEmail.style.display = "none"
            errors = 0
        }

        let loginPass = document.querySelector("#loginContraseña")
        if (loginPass.value == "") {
            errorPass.style.display = "block"
            errorPass.innerText = "Debes ingresar tu contraseña"
            errors = 1
        } else {
            errorPass.style.display = "none"
            errors = 0
        }
        if (errors == 1) {
            e.preventDefault()
        }

    })

})
