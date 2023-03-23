
let random = document.getElementById("random");

random.addEventListener('click', function (e){
// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona
e.preventDefault();

fetch("https://randomuser.me/api/")
    .then(response => {
        return response.json();
    })
    .then(data => {        
            renderizarDadosUsuario(data);          
    })
    .catch(
        function(erro){
           //console.log(erro);
        }
    );
})

function atualizaPagina() {
    window.location.reload();
}

function renderizarDadosUsuario(usuarioRandoms) {
    /* -------------------------------- Tarefa 1 -------------------------------- */
    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    for (const usuario of usuarioRandoms.results) {        
        
        console.log(usuario);
         
        let imgUser =document.getElementById("imgUser");
        imgUser.src = usuario.picture.medium;

        let emailUsuario = document.getElementById("emailUsuario"); 
        emailUsuario.textContent=`${usuario.email}`;       

        let nomeUsuario = document.getElementById("nomeUsuario");
        nomeUsuario.textContent = `${usuario.name.first}`; 
        
        let generoUsuario = document.getElementById("generoUsuario");
        generoUsuario.textContent = `${usuario.gender}`;

        let numeroUsuario = document.getElementById("numeroUsuario");
        numeroUsuario.textContent = `${usuario.phone
        }`; 

        let enderecoUsuario = document.getElementById("enderecoUsuario");
        enderecoUsuario.textContent = `${usuario.location
            .country}`; 
       
     
        //imgUser.appendChild(imgUser);
    }
    //atualizaPagina()
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.
}
//atualizaPagina()


/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.