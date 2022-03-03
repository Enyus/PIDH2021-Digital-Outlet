let divMiniImg = document.getElementsByClassName('miniimg')[0];
let divFocoImg = document.getElementsByClassName('focoimg')[0];

// Para que a primeira foto seja colocada em foco sempre:
divFocoImg.innerHTML = divMiniImg.children[0].innerHTML;
divMiniImg.children[0].remove();


