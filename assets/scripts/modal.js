const modal = document.getElementById("myModal");
const close = document.getElementById("modal-close")

const openModal = () => { modal.style.display = "block"; }
const closeModal = () => { modal.style.display = "none"; }

close.addEventListener("click", closeModal);

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    closeModal();
  }
});
