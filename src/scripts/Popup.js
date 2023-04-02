export default class Popup {
    constructor(popupSelector) {
      this._popupElement = document.querySelector(popupSelector);
    }
  
    _handleEscClose = (event) => {
      if (event.key === 'Escape') {
        this.close();
      }
    }
  
    setEventListeners() {
      this._popupButtonClose = this._popupElement.querySelector('.popup__close-icon');
      this._popupButtonClose.addEventListener('click', () => this.close());
      this._popupElement.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup')) { this.close()}
      });
    }
  
    open() {
      this._popupElement.classList.add('popup_opened');
      window.addEventListener('keydown', this._handleEscClose);
    }
  
    close() {
      this._popupElement.classList.remove('popup_opened');
      window.removeEventListener('keydown', this._handleEscClose);
    }
  }