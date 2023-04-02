const modal = document.getElementById("myModal");
const close = document.getElementById("modal-close")

const openModal = () => { modal.style.display = "block"; }
close.onclick = () => {  modal.style.display = "none"; }

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}