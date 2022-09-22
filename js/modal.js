export const Modal = {

  Wrapper: document.querySelector('.modal-wrapper'),
  Message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal .title button'),

  Open() { Modal.Wrapper.classList.add('open')},

  Close() { Modal.Wrapper.classList.remove('open')},
}

Modal.buttonClose.addEventListener('click', () => {
  Modal.Close()
})

window.addEventListener('keydown', handleKeydown)

function handleKeydown (event) {

  if(event.key === 'Escape') {
    Modal.Close()
  }
}