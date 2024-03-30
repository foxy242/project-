    const refs = {
        openModalBtn: document.querySelector('[data_open_modal]'),
        closeModalBtn: document.querySelector('[data_close_modal]'),
        backdrop: document.querySelector('[data_backdrop]'),
      };
      
      refs.openModalBtn.addEventListener('click', toggleModal);
      refs.closeModalBtn.addEventListener('click', toggleModal);
      
      refs.backdrop.addEventListener('click', logBackdropClick);
      
      function toggleModal() {
        refs.backdrop.classList.toggle('footer_is_hidden');
      }
      
      function logBackdropClick() {
        console.log('Це клік в бекдроп');
      }