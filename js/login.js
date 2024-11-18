function login() {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var form_errors = document.getElementById("form-errors")
    var form_success = document.getElementById("form-success")

    console.log(localStorage.getItem("user"))

    user = getUser(email, password)

    if (user != null) {
        form_success.innerText = `Welcome ${user.name}!`
        form_errors.innerText = "";
        localStorage.setItem("user", user.email);
        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    } else {
        form_errors.innerText = "Invalid email or password";
    }

    console.log(localStorage.getItem("user"))
}

function getUser(email, password) {
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
        if (json.users[i].email === email && json.users[i].password === password) {
            return json.users[i];
        }
    };
    return null;
}