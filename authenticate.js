var bcrypt = dcodeIO.bcrypt;

function authenticate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    fetch('users.json')
        .then(response => response.json())
        .then(data => {
            
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
