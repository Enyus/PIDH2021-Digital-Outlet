const campoBusca = document.getElementById('campobusca');
const botaoBusca = document.getElementById('botaobuscar');
const campoBuscaMobile = document.getElementById('campobuscamobile');
const botaoBuscaMobile = document.getElementById('botaobuscarmobile');

campoBusca.onkeydown = (e) => {
    if (e.key == 'Enter') {
        botaoBusca.click();
    };
};

botaoBusca.onclick = (e) => {
    if (campoBusca.value == '') {
        e.preventDefault()
    } else {
        botaoBusca.setAttribute('href', '/resultadobusca?busca='+campoBusca.value);
    };
};

campoBuscaMobile.onkeydown = (e) => {
    if (e.key == 'Enter') {
        botaoBuscaMobile.click();
    };
};

botaoBuscaMobile.onclick = (e) => {
    if (campoBuscaMobile.value == '') {
        e.preventDefault()
    } else {
        botaoBuscaMobile.setAttribute('href', '/resultadobusca?busca='+campoBuscaMobile.value);
    };
};