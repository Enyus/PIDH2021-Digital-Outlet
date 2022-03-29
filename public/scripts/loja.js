const botaoInicio = document.getElementById("irparainicio");
const botaoPedidos = document.getElementById("irparapedidos");
const botaoProdutos = document.getElementById("irparaprodutos");
const botaoDados = document.getElementById("irparadados");
const botaoEnderecos = document.getElementById("irparaenderecos");

const divInicio = document.getElementById("resumo");
const divPedidos = document.getElementById("pedidos");
const divProdutos = document.getElementById("listaprodutos");
const divDados = document.getElementById("dados");
const divEnderecos = document.getElementById("enderecos");

// const buttonImg = document.getElementById("perfilUsuario");
// const inputImgUpload = document.getElementById("fotoPerfil");
// const buttonImgSubmit = document.getElementById("submitPerfil");

// buttonImgSubmit.disabled = true;
// let statusFoto = 0;

// const botaoDeletaUsuario = document.getElementById("botaoDeletaUsuario");
// const confirmaDeletaUsuario = document.getElementById("confirmadeletausuario");

// botaoDeletaUsuario.disabled = true;

// const inputLogradouro = document.getElementById("logradouro");
// const inputNumero = document.getElementById("numero");
// const inputCidade = document.getElementById("cidade");
// const inputEstado = document.getElementById("estado");
// const inputCEP = document.getElementById("cep");
// const botaoCadastraEndereco = document.getElementById("botaoCadastraEndereco");

// botaoCadastraEndereco.disabled = true;
// let errosEndereco = [];

// function showPreview (event) {
//     if(event.target.files.length > 0){
//         let fileType = event.target.files[0].name.slice(-4);
//         if (fileType == '.jpg' || fileType == '.png' || fileType == 'jpeg') {
//             let src = URL.createObjectURL(event.target.files[0]);
//             buttonImg.src = src;
//             buttonImg.style.border = 'solid 3px green';
//             statusFoto = 1;
//         } else {
//             buttonImg.style.border = 'solid 3px red';
//             statusFoto = 0;
//         }
//     };
// };

// function checkValidationEndereco () {
//     if (errosEndereco.length == 0 &&
//         inputLogradouro.value != '' &&
//         inputNumero.value != '' &&
//         inputCidade.value != '' &&
//         inputEstado.value != '' &&
//         inputCEP.value != '') {
//             botaoCadastraEndereco.disabled = false
//     } else {
//         botaoCadastraEndereco.disabled = "true";
//     };
// }

botaoInicio.onclick = (e) => {
    divInicio.style.display= 'flex';
    divPedidos.style.display='none';
    divProdutos.style.display='none';
    divDados.style.display='none';
    divEnderecos.style.display='none';
};

botaoPedidos.onclick = (e) => {
    divInicio.style.display= 'none';
    divPedidos.style.display='block';
    divProdutos.style.display='none';
    divDados.style.display='none';
    divEnderecos.style.display='none';
};

botaoProdutos.onclick = (e) => {
    divInicio.style.display= 'none';
    divPedidos.style.display='none';
    divProdutos.style.display='block';
    divDados.style.display='none';
    divEnderecos.style.display='none';
};

botaoDados.onclick = (e) => {
    divInicio.style.display= 'none';
    divPedidos.style.display='none';
    divProdutos.style.display='none';
    divDados.style.display='block';
    divEnderecos.style.display='none';
};

botaoEnderecos.onclick = (e) => {
    divInicio.style.display= 'none';
    divPedidos.style.display='none';
    divProdutos.style.display='none';
    divDados.style.display='none';
    divEnderecos.style.display='block';
};


// inputImgUpload.onchange = (e) => {
//     showPreview(e);
//     if (statusFoto==1) {
//         buttonImgSubmit.disabled = false;
//     } else {
//         buttonImgSubmit.disabled = true;
//     };
// };

// confirmaDeletaUsuario.onchange = (e) => {
//     if (confirmaDeletaUsuario.checked) {
//         botaoDeletaUsuario.disabled = false;
//     } else {
//         botaoDeletaUsuario.disabled = true;
//     }
// };