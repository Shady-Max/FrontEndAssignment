document.addEventListener("DOMContentLoaded", () => {
    email = localStorage.getItem("user");
    user = getUser(email);
    userDataSection = document.getElementById("user-data");
    if (user == null) {
        userDataSection.innerText = "You are not authorized!!!";
        return;
    }
    userDataSection.innerHTML = `
        <span>Name: ${user.name}<span><br>
        <span>Email: ${user.email}<span><br>
        <span>Password: ${user.password}<span><br>
    `;
})

function getUser(email) {
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
            return json.users[i];
        }
    };
    return null;
}