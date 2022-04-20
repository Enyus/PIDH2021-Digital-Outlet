// const modalId = document.querySelectorAll('#id01');
const modal = document.querySelectorAll(".modal");
const closeModal = document.querySelectorAll("span.close");
const cancelButton = document.querySelectorAll("button.cancelbtn");
const modalContent = document.querySelector("form.modal-content");
const form = document.querySelector("#id01 form")

const showModalLoja = document.querySelectorAll("a.deletarProduto");
const showModalEditProduto = document.querySelectorAll("button.delete");


modal.forEach(element => {
  showModalLoja.forEach(el => {
    el.addEventListener('click', function(e) {
      alert()
    })
  })
})

modal.forEach(elementModal => {
  cancelButton.forEach(elementCancel => {
    elementCancel.addEventListener('click', function(e) {
      elementModal.style.display = 'none';
    })
  })
  closeModal.forEach(elementClose => {
    elementClose.addEventListener('click', function(e) {
      elementModal.style.display = 'none';
    })
  })
  window.addEventListener('click', function(e){
    if (e.target == elementModal) {
      elementModal.style.display = "none";
    }
  })
});