console.log("Está rodando")

const inputEmail = document.getElementById("email");
const inputRazaoSocial = document.getElementById("razaosocial");
const inputNomeFantasia = document.getElementById("nomefantasia");
const inputIe = document.getElementById("ie");
const inputCnpj = document.getElementById("cnpj");
const inputPassword = document.getElementById("password");
const inputConfirmaPassword = document.getElementById("confirmapassword");
const buttonSubmit = document.getElementById("submit")

const erros = []

buttonSubmit.disabled = "true";

function checkValidation () {
    if (erros.length == 0 &&
        inputEmail.value != '' &&
        inputRazaoSocial.value != '' &&
        inputNomeFantasia.value != '' &&
        inputIe.value != '' &&
        inputCnpj.value != '' &&
        inputPassword.value != '' &&
        inputConfirmaPassword.value != '') {
            buttonSubmit.disabled = false
    } else {
        buttonSubmit.disabled = "true";
    };
}

inputEmail.onblur = (e) => {
    if (inputEmail.value.length <= 3 ||
        inputEmail.value.indexOf("@") < 0 ||
        inputEmail.value.indexOf(" ") > 0 ||
        inputEmail.value.indexOf(".") < 0) {
        inputEmail.style.borderColor = "red";
        erros.push("email");
    } else {
        inputEmail.style.borderColor = "green";
        if (erros.includes("email")) {
            erros.splice(erros.indexOf("email"), 1);
        };
    };
    checkValidation();
};

inputRazaoSocial.onblur = (e) => {
    if (inputRazaoSocial.value.length < 2) {
        inputRazaoSocial.style.borderColor = "red";
        erros.push("Razão Social");
    } else {
        inputRazaoSocial.style.borderColor = "green";
        if (erros.includes("Razão Social")) {
            erros.splice(erros.indexOf("Razão Social"), 1);
        };
    }
    checkValidation();
}

inputNomeFantasia.onblur = (e) => {
    if (inputNomeFantasia.value.length < 2) {
        inputNomeFantasia.style.borderColor = "red";
        erros.push("Nome Fantasia");
    } else {
        inputNomeFantasia.style.borderColor = "green";
        if (erros.includes("Nome Fantasia")) {
            erros.splice(erros.indexOf("Nome Fantasia"), 1);
        };
    }
    checkValidation();
}

// Qual validação usar para data de nascimento?

inputIe.onblur = (e) => {
    if (inputIe.value.length < 9 || inputIe > 14) {
        inputIe.style.borderColor = "red";
        erros.push("Inscrição Estadual");
    } else {
        inputIe.style.borderColor = "green";
        if (erros.includes("Inscrição Estadual")) {
            erros.splice(erros.indexOf("Inscrição Estadual"), 1);
        };
    }
    checkValidation();
}

inputCnpj.onblur = (e) => {
    if (inputCnpj.value.length != 14 ||
        isNaN(inputCnpj.value)) {
        inputCnpj.style.borderColor = "red";
        alert("O CNPJ deve ser apenas numérico e ter 14 números")
        erros.push("CNPJ");
    } else {
        inputCnpj.style.borderColor = "green";
        if (erros.includes("CNPJ")) {
            erros.splice(erros.indexOf("CNPJ"), 1);
        };
    }
    checkValidation();
}

inputPassword.onblur = (e) => {
    if (inputPassword.value.length < 6) {
        inputPassword.style.borderColor = "red";
        erros.push("senha");
    } else {
        inputPassword.style.borderColor = "green";
        if (erros.includes("senha")) {
            erros.splice(erros.indexOf("senha"), 1);
        };
    }
    checkValidation();
}

inputConfirmaPassword.onblur = (e) => {
    if (inputConfirmaPassword.value != inputPassword.value ) {
        inputConfirmaPassword.style.borderColor = "red";
        erros.push("confirmaSenha");
    } else {
        inputConfirmaPassword.style.borderColor = "green";
        if (erros.includes("confirmaSenha")) {
            erros.splice(erros.indexOf("confirmaSenha"), 1);
        };
    }
    checkValidation();
}