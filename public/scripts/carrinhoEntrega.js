const inputCEP = document.getElementById('cep');
const inputLogradouro = document.getElementById('logradouro');
const inputNumero = document.getElementById('numero');
const inputComplemento = document.getElementById('complemento');
const inputCidade = document.getElementById('cidade');
const inputEstado = document.getElementById('estado');

const inputsAutoEndereco = document.getElementsByName('enderecoauto');


function autoEndereco(event) {
    inputLogradouro.value = event.path[1].children[2].value;
    inputNumero.value = event.path[1].children[3].value;
    inputComplemento.value = event.path[1].children[4].value;
    inputCidade.value = event.path[1].children[5].value;
    inputEstado.value = event.path[1].children[6].value;
    inputCEP.value = event.path[1].children[7].value;
};

function uncheckAutoEndereco () {
    inputsAutoEndereco.forEach( input => {
        input.checked = false;
    });
};

inputCEP.onfocus = (e) => {
    inputCEP.value = "";
    uncheckAutoEndereco();
};
inputLogradouro.onfocus = (e) => {inputLogradouro.value = "";
uncheckAutoEndereco();};
inputNumero.onfocus = (e) => {inputNumero.value = "";
uncheckAutoEndereco();};
inputComplemento.onfocus = (e) => {inputComplemento.value = "";
uncheckAutoEndereco();};
inputCidade.onfocus = (e) => {inputCidade.value = "";
uncheckAutoEndereco();};
inputEstado.onfocus = (e) => {inputEstado.value = "";
uncheckAutoEndereco();};