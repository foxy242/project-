// const gmail = document.querySelector(".footer__gmail-input").value
// if (gmail.includes("@gmaii.com")) {
  const refs = {
    openModalBtn: document.querySelector('[data-open-modal]'),
    closeModalBtn: document.querySelector('[data-close-modal]'),
    backdrop: document.querySelector('[data-backdrop]'),
  };
  
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  
  refs.backdrop.addEventListener('click', logBackdropClick);
  
  function toggleModal() {
    refs.backdrop.classList.toggle('footer__is-hidden');
  }
  
  function logBackdropClick() {
    console.log('Це клік в бекдроп');
  }
// } else {
//   alert("ds")
// }
  