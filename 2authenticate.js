var users = [
    {
      "username": "admin",
      "password": "$2b$10$BdoZJhYhX2pZdfL6YX/LWu6L6GBzBzjtn6pmoGtsMCkPMV2TYJ/Ae"
    }
  ];
  
  function authenticate() {
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
  
      // Encontra o usuário correspondente pelo nome de usuário
      var user = users.find(user => user.username === username);
  
      if (user && bcrypt.compareSync(password, user.password)) {
          window.location.href = "sistem.html";
      } else {
          alert("Digite um usuário e senha válidos!");
      }
  }
  