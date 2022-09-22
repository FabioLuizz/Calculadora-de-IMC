export const AlertError = {
  Element: document.querySelector('.alert-error'),

  Open() {AlertError.Element.classList.add('open')},

  Close() {AlertError.Element.classList.remove('open')}
}

