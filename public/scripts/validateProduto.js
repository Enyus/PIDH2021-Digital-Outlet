const inputNomeProduto = document.getElementById("nomeproduto");
const inputMarca = document.getElementById("marca");
const inputPreco = document.getElementById("preco");
const inputCategoria = document.getElementById("categoria");
const inputDescProduto = document.getElementById("descproduto");

const divFoto = document.getElementById("fotoproduto");

const buttonImg1 = document.getElementById("buttonimg1");
const buttonImg2 = document.getElementById("buttonimg2");
const buttonImg3 = document.getElementById("buttonimg3");
const buttonImg4 = document.getElementById("buttonimg4");
const buttonImg5 = document.getElementById("buttonimg5");
const buttonImg6 = document.getElementById("buttonimg6");

const inputImgUpload1 = document.getElementById("imgupload1");
const inputImgUpload2 = document.getElementById("imgupload2");
const inputImgUpload3 = document.getElementById("imgupload3");
const inputImgUpload4 = document.getElementById("imgupload4");
const inputImgUpload5 = document.getElementById("imgupload5");
const inputImgUpload6 = document.getElementById("imgupload6");

const divDescTec = document.getElementById('desctec');

const inputCheckDesc1 = document.getElementById('checkdesc1');
const inputCheckDesc2 = document.getElementById('checkdesc2');
const inputCheckDesc3 = document.getElementById('checkdesc3');
const inputCheckDesc4 = document.getElementById('checkdesc4');
const inputCheckDesc5 = document.getElementById('checkdesc5');
const inputCheckDesc6 = document.getElementById('checkdesc6');

const inputCatDesc1 = document.getElementById("catdesc1");
const inputDescTec1 = document.getElementById("desctec1");
const inputCatDesc2 = document.getElementById("catdesc2");
const inputDescTec2 = document.getElementById("desctec2");
const inputCatDesc3 = document.getElementById("catdesc3");
const inputDescTec3 = document.getElementById("desctec3");
const inputCatDesc4 = document.getElementById("catdesc4");
const inputDescTec4 = document.getElementById("desctec4");
const inputCatDesc5 = document.getElementById("catdesc5");
const inputDescTec5 = document.getElementById("desctec5");
const inputCatDesc6 = document.getElementById("catdesc6");
const inputDescTec6 = document.getElementById("desctec6");

const buttonSubmit = document.getElementById("submit");

const erros = [];

buttonSubmit.disabled = "true";

function checkValidation () {
    if (inputImgUpload1.value == '' &&
        inputImgUpload2.value == '' &&
        inputImgUpload3.value == '' &&
        inputImgUpload4.value == '' &&
        inputImgUpload5.value == '' &&
        inputImgUpload6.value == '') {
        divFoto.style.border = "solid red 1px";
        buttonSubmit.disabled = true;
    } else {
        divFoto.style.border = "unset";
    };

    if ((inputCatDesc1.value == '' || inputDescTec1.value == '' || inputCheckDesc1.checked == false) &&
        (inputCatDesc2.value == '' || inputDescTec2.value == '' || inputCheckDesc2.checked == false) &&
        (inputCatDesc3.value == '' || inputDescTec3.value == '' || inputCheckDesc3.checked == false) &&
        (inputCatDesc4.value == '' || inputDescTec4.value == '' || inputCheckDesc4.checked == false) &&
        (inputCatDesc5.value == '' || inputDescTec5.value == '' || inputCheckDesc5.vchecked == false) &&
        (inputCatDesc6.value == '' || inputDescTec6.value == '' || inputCheckDesc6.checked == false)) {
        divDescTec.style.border = "solid red 1px";
        buttonSubmit.disabled = true;
    } else {
        divDescTec.style.border = "unset";
    };

    if (erros.length == 0 &&
        inputNomeProduto.value != '' &&
        inputMarca.value != '' &&
        inputCategoria.value != '' &&
        inputDescProduto.value != '' &&
        inputCatDesc1.value != '' &&
        inputDescTec1.value != '') {
            buttonSubmit.disabled = false
    } else {
        buttonSubmit.disabled = true;
    };
};

buttonsImg = [null, buttonImg1, buttonImg2, buttonImg3, buttonImg4, buttonImg5, buttonImg6]

function showPreview (event, i) {
    if(event.target.files.length > 0){
        let src = URL.createObjectURL(event.target.files[0]);
        buttonsImg[i].children[1].src = src;
    };
};

inputNomeProduto.onblur = (e) => {
    if (inputNomeProduto.value.length < 2) {
        inputNomeProduto.style.borderColor = "red";
        erros.push("Nome Produto");
    } else {
        inputNomeProduto.style.borderColor = "green";
        if (erros.includes("Nome Produto")) {
            erros.splice(erros.indexOf("Nome Produto"), 1);
        };
    }
    checkValidation();
}

inputMarca.onblur = (e) => {
    if (inputMarca.value.length < 2) {
        inputMarca.style.borderColor = "red";
        erros.push("Marca");
    } else {
        inputMarca.style.borderColor = "green";
        if (erros.includes("Marca")) {
            erros.splice(erros.indexOf("Marca"), 1);
        };
    }
    checkValidation();
}

inputPreco.onblur = (e) => {
    if (inputPreco.value.length < 1) {
        inputPreco.style.borderColor = "red";
        erros.push("Preço");
    } else {
        inputPreco.style.borderColor = "green";
        if (erros.includes("Preço")) {
            erros.splice(erros.indexOf("Preço"), 1);
        };
    }
    checkValidation();
}

inputCategoria.onblur = (e) => {
    if (inputCategoria.value.length < 1) {
        inputCategoria.style.borderColor = "red";
        erros.push("Categoria");
    } else {
        inputCategoria.style.borderColor = "green";
        if (erros.includes("Categoria")) {
            erros.splice(erros.indexOf("Categoria"), 1);
        };
    }
    checkValidation();
}

inputDescProduto.onblur = (e) => {
    if (inputDescProduto.value.length < 10) {
        inputDescProduto.style.borderColor = "red";
        erros.push("Descrição do Produto");
    } else {
        inputDescProduto.style.borderColor = "green";
        if (erros.includes("Descrição do Produto")) {
            erros.splice(erros.indexOf("Descrição do Produto"), 1);
        };
    }
    checkValidation();
}

//Quais validações usar para imagens?

inputImgUpload1.onchange = (e) => {
    showPreview(e, 1);
    if (inputImgUpload1.value == '') {
        erros.push("Imagem");
    } else {
        buttonImg1.style.borderColor = "green";
        if (erros.includes("Imagem")) {
            erros.splice(erros.indexOf("Imagem"), 1);
        };
    }
    checkValidation();
}

inputImgUpload2.onchange = (e) => {
    showPreview(e, 2);
    if (inputImgUpload2.value == '') {
        erros.push("Imagem");
    } else {
        buttonImg2.style.borderColor = "green";
        if (erros.includes("Imagem")) {
            erros.splice(erros.indexOf("Imagem"), 1);
        };
    }
    checkValidation();
}

inputImgUpload3.onchange = (e) => {
    showPreview(e, 3);
    if (inputImgUpload3.value == '') {
        erros.push("Imagem");
    } else {
        buttonImg3.style.borderColor = "green";
        if (erros.includes("Imagem")) {
            erros.splice(erros.indexOf("Imagem"), 1);
        };
    }
    checkValidation();
}

inputImgUpload4.onchange = (e) => {
    showPreview(e, 4);
    if (inputImgUpload4.value == '') {
        erros.push("Imagem");
    } else {
        buttonImg4.style.borderColor = "green";
        if (erros.includes("Imagem")) {
            erros.splice(erros.indexOf("Imagem"), 1);
        };
    }
    checkValidation();
}

inputImgUpload5.onchange = (e) => {
    showPreview(e, 5);
    if (inputImgUpload5.value == '') {
        erros.push("Imagem");
    } else {
        buttonImg5.style.borderColor = "green";
        if (erros.includes("Imagem")) {
            erros.splice(erros.indexOf("Imagem"), 1);
        };
    }
    checkValidation();
}

inputImgUpload6.onchange = (e) => {
    showPreview(e, 6);
    if (inputImgUpload6.value == '') {
        erros.push("Imagem");
    } else {
        buttonImg6.style.borderColor = "green";
        if (erros.includes("Imagem")) {
            erros.splice(erros.indexOf("Imagem"), 1);
        };
    }
    checkValidation();
}

// Validações das Descrições Técnicas

inputCatDesc1.onblur = (e) => {
    if (inputCatDesc1.value.length == '') {
        inputCatDesc1.style.borderColor = "red";
        erros.push("Cat. Descrição do Produto 1");
    } else {
        inputCheckDesc1.checked = true;
        inputCatDesc1.style.borderColor = "green";
        if (erros.includes("Cat. Descrição do Produto 1")) {
            erros.splice(erros.indexOf("Cat. Descrição do Produto 1"), 1);
        };
    }
    checkValidation();
};

inputDescTec1.onblur = (e) => {
    if (inputDescTec1.value.length == '') {
        inputDescTec1.style.borderColor = "red";
        erros.push("Descrição do Produto 1");
    } else {
        inputCheckDesc1.checked = true;
        inputDescTec1.style.borderColor = "green";
        if (erros.includes("Descrição do Produto 1")) {
            erros.splice(erros.indexOf("Descrição do Produto 1"), 1);
        };
    }
    checkValidation();
};

inputCatDesc2.onblur = (e) => {
    if (inputCatDesc2.value.length == '') {
        inputCatDesc2.style.borderColor = "red";
        erros.push("Cat. Descrição do Produto 2");
    } else {
        inputCatDesc2.style.borderColor = "green";
        inputCheckDesc2.checked = true;
        if (erros.includes("Cat. Descrição do Produto 2")) {
            erros.splice(erros.indexOf("Cat. Descrição do Produto 2"), 1);
        };
    }
    checkValidation();
};

inputDescTec2.onblur = (e) => {
    if (inputDescTec2.value.length == '') {
        inputDescTec2.style.borderColor = "red";
        erros.push("Descrição do Produto 2");
    } else {
        inputDescTec2.style.borderColor = "green";
        inputCheckDesc2.checked = true;
        if (erros.includes("Descrição do Produto 2")) {
            erros.splice(erros.indexOf("Descrição do Produto 2"), 1);
        };
    }
    checkValidation();
};

inputCatDesc3.onblur = (e) => {
    if (inputCatDesc3.value.length == '') {
        inputCatDesc3.style.borderColor = "red";
        erros.push("Cat. Descrição do Produto 3");
    } else {
        inputCatDesc3.style.borderColor = "green";
        inputCheckDesc3.checked = true;
        if (erros.includes("Cat. Descrição do Produto 3")) {
            erros.splice(erros.indexOf("Cat. Descrição do Produto 3"), 1);
        };
    }
    checkValidation();
};

inputDescTec3.onblur = (e) => {
    if (inputDescTec3.value.length == '') {
        inputDescTec3.style.borderColor = "red";
        erros.push("Descrição do Produto 3");
    } else {
        inputDescTec3.style.borderColor = "green";
        inputCheckDesc3.checked = true;
        if (erros.includes("Descrição do Produto 3")) {
            erros.splice(erros.indexOf("Descrição do Produto 3"), 1);
        };
    }
    checkValidation();
};

inputCatDesc4.onblur = (e) => {
    if (inputCatDesc4.value.length == '') {
        inputCatDesc4.style.borderColor = "red";
        erros.push("Cat. Descrição do Produto 4");
    } else {
        inputCatDesc4.style.borderColor = "green";
        inputCheckDesc4.checked = true;
        if (erros.includes("Cat. Descrição do Produto 4")) {
            erros.splice(erros.indexOf("Cat. Descrição do Produto 4"), 1);
        };
    }
    checkValidation();
};

inputDescTec4.onblur = (e) => {
    if (inputDescTec4.value.length == '') {
        inputDescTec4.style.borderColor = "red";
        erros.push("Descrição do Produto 4");
    } else {
        inputDescTec4.style.borderColor = "green";
        inputCheckDesc4.checked = true;
        if (erros.includes("Descrição do Produto 4")) {
            erros.splice(erros.indexOf("Descrição do Produto 4"), 1);
        };
    }
    checkValidation();
};

inputCatDesc5.onblur = (e) => {
    if (inputCatDesc5.value.length == '') {
        inputCatDesc5.style.borderColor = "red";
        erros.push("Cat. Descrição do Produto 5");
    } else {
        inputCatDesc5.style.borderColor = "green";
        inputCheckDesc5.checked = true;
        if (erros.includes("Cat. Descrição do Produto 5")) {
            erros.splice(erros.indexOf("Cat. Descrição do Produto 5"), 1);
        };
    }
    checkValidation();
};

inputDescTec5.onblur = (e) => {
    if (inputDescTec5.value.length == '') {
        inputDescTec5.style.borderColor = "red";
        erros.push("Descrição do Produto 5");
    } else {
        inputDescTec5.style.borderColor = "green";
        inputCheckDesc5.checked = true;
        if (erros.includes("Descrição do Produto 5")) {
            erros.splice(erros.indexOf("Descrição do Produto 5"), 1);
        };
    }
    checkValidation();
};

inputCatDesc6.onblur = (e) => {
    if (inputCatDesc6.value.length == '') {
        inputCatDesc6.style.borderColor = "red";
        erros.push("Cat. Descrição do Produto 6");
    } else {
        inputCatDesc6.style.borderColor = "green";
        inputCheckDesc6.checked = true;
        if (erros.includes("Cat. Descrição do Produto 6")) {
            erros.splice(erros.indexOf("Cat. Descrição do Produto 6"), 1);
        };
    }
    checkValidation();
};

inputDescTec6.onblur = (e) => {
    if (inputDescTec6.value.length == '') {
        inputDescTec6.style.borderColor = "red";
        erros.push("Descrição do Produto 6");
    } else {
        inputDescTec6.style.borderColor = "green";
        inputCheckDesc6.checked = true;
        if (erros.includes("Descrição do Produto 6")) {
            erros.splice(erros.indexOf("Descrição do Produto 6"), 1);
        };
    }
    checkValidation();
};