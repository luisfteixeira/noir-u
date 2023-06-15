function authenticate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "123456") {
        window.location.href = "sistem.html";
    } else {
        alert("Digite um Usuário e senha Válidos!");
    }
}