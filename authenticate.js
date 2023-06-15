function authenticate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Carrega os dados dos usuários do arquivo JSON
    fetch('users.json')
        .then(response => response.json())
        .then(data => {
            // Encontra o usuário correspondente pelo nome de usuário
            var user = data.users.find(user => user.username === username);

            if (user && bcrypt.compareSync(password, user.password)) {
                window.location.href = "sistem.html";
            } else {
                alert("Digite um usuário e senha válidos!");
            }
        })
        .catch(error => {
            console.error('Erro ao carregar dados dos usuários:', error);
        });
}
