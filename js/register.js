function register() {
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var form_errors = document.getElementById("form-errors")
    var form_success = document.getElementById("form-success")
    if (!isUserExists(email) && validateEmail(email) && isStrongPassword(password)) {
        json = localStorage.getItem("users")
        json = JSON.parse(json)
        json.users.push({name:name, email:email, password: password})
        json = JSON.stringify(json);
        localStorage.setItem("users", json);
        form_errors.innerText = ""
        form_success.innerText = "Registered successfully"
        setTimeout(() => {
            window.location.href = "login.html";
        }, 1000);
    }
}

function isUserExists(email) {
    var error = document.getElementById("form-errors")
    json = localStorage.getItem("users")
    if (json == null) {
        json = {
            users: [
                {name:"admin", email: "admin@admin.com", password: "admin"},
                {name:"user", email:"user@user.com", password: "user"}
            ]
        };
        json = JSON.stringify(json)
        localStorage.setItem("users", json)
    }
    json = JSON.parse(json)
    for (var i=0; i<json.users.length; i++) {
        if (json.users[i].email === email) {
            error.innerText = "User with this email already exists"
            return true;
        }
    };
    return false;
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