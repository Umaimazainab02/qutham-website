let password = document.getElementById("password");
let email = document.getElementById("email");
let login = document.getElementById("login");
login.addEventListener("click", function () {
    if (email.value.trim() === "") {
        document.getElementById("mail").innerHTML = "Email must required";
        return;
    } else if (!email.value.includes("@")) {
        document.getElementById("mail").innerHTML = "Email must contain @";
        return;
    } else {
        document.getElementById("mail").innerHTML = ""
    }

     if (password.value.trim() === "") {
        document.getElementById("pass").innerHTML = "Password is required";
        return;
    } else if (password.value.length < 8) {
        document.getElementById("pass").innerHTML = "Password must be at least 8 characters";
        return;
    } else {
        document.getElementById("pass").innerHTML = "";
    }
}
)


