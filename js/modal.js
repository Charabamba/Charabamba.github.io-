function modalShow() {
  document.querySelector(".hide").classList.remove("hide");
}

function modalHide() {
  document.querySelector(".modal").classList.add("hide");
}

// -------------------------------------------------------------

document.querySelector(".modal-show").onclick = modalShow;
document.querySelector(".modal-hide").onclick = modalHide;
