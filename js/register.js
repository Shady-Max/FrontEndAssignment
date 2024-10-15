function register() {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var form_errors = document.getElementById("form-errors")
    var form_success = document.getElementById("form-success")
    if (validateEmail(email) && isStrongPassword(password)) {
        form_errors.innerText = ""
        form_success.innerText = "Registered successfully"
    }

}

function validateEmail(email) {
    var error = document.getElementById("form-errors")
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        error.innerText = "Incorect email"
        return false;
    }
    return true;
}

function isStrongPassword(password) {
    var error = document.getElementById("form-errors")
    if (password.length < 8 || password.length > 32) {
        error.innerText = "Password length must be higher than 8 and lower than 32";
        return false;
    }

    const specialSymbolRegex = /[!@#\$%\^&\*\(\)_\+\-=\[\]{};:"\\|,.<>\/?]/;
    if (!specialSymbolRegex.test(password)) {
        error.innerText = "Password must include atleast 1 symbol"
        return false;
    }

    const numberRegex = /[0-9]/;
    if (!numberRegex.test(password)) {
        error.innerText = "Password must include atleast 1 number"
        return false;
    }

    const uppercaseLetterRegex = /[A-Z]/;
    if (!uppercaseLetterRegex.test(password)) {
        error.innerText = "Password must include atleast 1 uppercase letter"
        return false;
    }

    const lowercaseLetterRegex = /[a-z]/;
    if (!lowercaseLetterRegex.test(password)) {
        error.innerText = "Password must include atleast 1 lowercase letter"
        return false;
    }

    return true;
}