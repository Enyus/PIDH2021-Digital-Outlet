console.log("Está puxando o script corretamente")

const inputEmail = document.getElementById("email");
const inputNome = document.getElementById("nome");
const inputSobrenome = document.getElementById("sobrenome");
const inputDataNasc = document.getElementById("dataNasc");
const inputCpf = document.getElementById("cpf");
const inputPassword = document.getElementById("password");
const inputConfirmaPassword = document.getElementById("confirmapassword");


inputEmail.onblur = (e) => {
    if (inputEmail.value.length <= 3 ||
        inputEmail.value.indexOf("@") < 0 ||
        inputEmail.value.indexOf(" ") > 0 ||
        inputEmail.value.indexOf(".") < 0) {
        inputEmail.style.borderColor = "red";
    } else {
        inputEmail.style.borderColor = "green";
    }
};

inputNome.onblur = (e) => {
    if (inputNome.value.length < 2) {
        inputNome.style.borderColor = "red";
    } else {
        inputNome.style.borderColor = "green";
    }
}

inputSobrenome.onblur = (e) => {
    if (inputSobrenome.value.length < 2) {
        inputSobrenome.style.borderColor = "red";
    } else {
        inputSobrenome.style.borderColor = "green";
    }
}

// Qual validação usar para data de nascimento?

inputDataNasc.onblur = (e) => {
    if (inputDataNasc.value.length != 10) {
        inputDataNasc.style.borderColor = "red";
    } else {
        inputDataNasc.style.borderColor = "green";
    }
}

inputCpf.onblur = (e) => {
    if (inputCpf.value.length != 11 ||
        isNaN(inputCpf.value)) {
        inputCpf.style.borderColor = "red";
        alert("O CPF deve ser apenas numérico e ter 11 números")
    } else {
        inputCpf.style.borderColor = "green";
    }
}

inputPassword.onblur = (e) => {
    if (inputPassword.value.length < 6) {
        inputPassword.style.borderColor = "red";
    } else {
        inputPassword.style.borderColor = "green";
    }
}

inputConfirmaPassword.onblur = (e) => {
    if (inputConfirmaPassword.value != inputPassword.value ) {
        inputConfirmaPassword.style.borderColor = "red";
    } else {
        inputConfirmaPassword.style.borderColor = "green";
    }
}