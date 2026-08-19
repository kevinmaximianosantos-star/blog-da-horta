const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let curtiu = false;
    botao.addEventListener("click", botaoClicado);
    
    function botaoClicado() {
        console.log("fui clicado");
        let texto = botao.querySelector("span");
        if (curtiu === false) {
            texto.textContent++;
            curtiu = true;
            botao.style.backgroundColor = "#4A3B32"; // Muda para cor secundária ao curtir
        } else {
            texto.textContent--;
            curtiu = false;
            botao.style.backgroundColor = "#2E5A44"; // Volta para a cor original
        }
    }
});
