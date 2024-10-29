function login() {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var form_errors = document.getElementById("form-errors")
    var form_success = document.getElementById("form-success")

    console.log(localStorage.getItem("user"))

    if (email === "admin@admin.com" || password === "admin") {
        form_success.innerText = "Welcome Admin User!"
        form_errors.innerText = "";
        localStorage.setItem("user", "admin@admin.com");
        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    }
    else if (email === "user@user.com" || password === "user") {
        form_success.innerText = "Welcome User!";
        form_errors.innerText = "";
        localStorage.setItem("user", "user@user.com");
        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);
    } else {
        form_errors.innerText = "Invalid email or password";
    }

    console.log(localStorage.getItem("user"))
}