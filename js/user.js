const user = localStorage.getItem("user");

const userSection = document.getElementById("user-section");
console.log(user);
if (user) {
    userSection.innerHTML = `
        <span>Welcome ${user}!</span>
        <a href="#" id="logout">Logout</a>
    `;

    document.getElementById("logout").addEventListener("click", () => {
        localStorage.removeItem("user");
        window.location.reload();
    });
} else {
    userSection.innerHTML = `
        <a class="col-1" href="./login.html">login</a>
        <a class="col-1" href="./register.html">register</a>
    `;
}
