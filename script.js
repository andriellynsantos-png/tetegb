function revelarMensagem() {
    document.getElementById("Mensagem").innerHTML = "Olá, você alterou a mensagem chamado uma função JS";
}

function mostrarNome() {
    let nome = document.getElementById("nomeUsuario").value;

    document.getElementById("resultadoNome").innerText = "Bem-vindo(a), " + nome + "!";
}
