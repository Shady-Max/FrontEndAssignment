document.addEventListener("DOMContentLoaded", () => {
    const user = localStorage.getItem("user");

    const userSection = document.getElementById("user-section");
    console.log(user);
    if (user) {
        userData = getUser(user)
        if (userData === null) {
            userSection.innerHTML = `
            <a class="col-1" href="./login.html">login</a>
            <a class="col-1" href="./register.html">register</a>
        `;
        } else {
            userSection.innerHTML = `
                <span>Welcome ${userData.name}!</span>
                | <a href="profile.html">Profile</a> |
                <a href="#" id="logout">Logout</a>
            `;

            document.getElementById("logout").addEventListener("click", () => {
                localStorage.removeItem("user");
                window.location.reload();
            });
        }
        
    } else {
        userSection.innerHTML = `
            <a class="col-1" href="./login.html">login</a>
            <a class="col-1" href="./register.html">register</a>
        `;
    }
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