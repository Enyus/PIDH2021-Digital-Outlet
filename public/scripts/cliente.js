const botaoInicio = document.getElementById("irparainicio");
const botaoPedidos = document.getElementById("irparapedidos");
const botaoDesejos = document.getElementById("irparadesejos");
const botaoDados = document.getElementById("irparadados");
const botaoEnderecos = document.getElementById("irparaenderecos");
const botaoVale = document.getElementById("irparavale");

const divInicio = document.getElementById("inicio");
const divPedidos = document.getElementById("pedidos");
const divDesejos = document.getElementById("desejos");
const divDados = document.getElementById("dados");
const divEnderecos = document.getElementById("enderecos");
const divVale = document.getElementById("vale");

const buttonImg = document.getElementById("perfilUsuario");
const inputImgUpload = document.getElementById("fotoPerfil");

const buttonImgSubmit = document.getElementById("submitPerfil");

buttonImgSubmit.disabled = true;

function showPreview (event) {
    if(event.target.files.length > 0){
        let src = URL.createObjectURL(event.target.files[0]);
        buttonImg.src = src;
    };
};

botaoInicio.onclick = (e) => {
    divInicio.style.display= 'flex';
    divPedidos.style.display='none';
    divDesejos.style.display='none';
    divDados.style.display='none';
    divEnderecos.style.display='none';
    divVale.style.display='none';
};

botaoPedidos.onclick = (e) => {
    divInicio.style.display= 'none';
    divPedidos.style.display='flex';
    divDesejos.style.display='none';
    divDados.style.display='none';
    divEnderecos.style.display='none';
    divVale.style.display='none';
};

botaoDesejos.onclick = (e) => {
    divInicio.style.display= 'none';
    divPedidos.style.display='none';
    divDesejos.style.display='block';
    divDados.style.display='none';
    divEnderecos.style.display='none';
    divVale.style.display='none';
};

botaoDados.onclick = (e) => {
    divInicio.style.display= 'none';
    divPedidos.style.display='none';
    divDesejos.style.display='none';
    divDados.style.display='block';
    divEnderecos.style.display='none';
    divVale.style.display='none';
};

botaoEnderecos.onclick = (e) => {
    divInicio.style.display= 'none';
    divPedidos.style.display='none';
    divDesejos.style.display='none';
    divDados.style.display='none';
    divEnderecos.style.display='block';
    divVale.style.display='none';
};

botaoVale.onclick = (e) => {
    divInicio.style.display= 'none';
    divPedidos.style.display='none';
    divDesejos.style.display='none';
    divDados.style.display='none';
    divEnderecos.style.display='none';
    divVale.style.display='block';
};

inputImgUpload.onchange = (e) => {
    showPreview(e);
    buttonImgSubmit.disabled = false;
}