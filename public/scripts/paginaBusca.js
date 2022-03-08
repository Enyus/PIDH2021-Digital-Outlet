const inputBuscaASide = document.getElementById('buscaside');


inputBuscaASide.onclick = (e) => {
    inputBuscaASide.value = '';
};

inputBuscaASide.onkeydown = (e) => {
    if (e.key == 'Enter') {
        campoBusca.value = inputBuscaASide.value;
        botaoBusca.click();
    };
};
