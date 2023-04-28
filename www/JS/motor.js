function carregar() {

localStorage.setItem("nome", document.getElementById("coletortexto").value);
localStorage.setItem("senha", document.getElementById("coletortexto2").value);

alert("Inserido");
}

    function carregar2() {

    localStorage.setItem("Lnome", document.getElementById("loginNome").value);
    localStorage.setItem("Lsenha", document.getElementById("loginSenha").value);
alert("Inserido");
}
function exibir(){
    if (localStorage.getItem("Lnome") == localStorage.getItem("nome") && localStorage.getItem("Lsenha") == localStorage.getItem("senha"))
    {
                document.getElementById("ata").textContent = "Parabéns tu recebeu MB";
    }
}
