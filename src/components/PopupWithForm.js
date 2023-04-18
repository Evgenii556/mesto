import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupElement.querySelector('.popup__form');
    this._buttonSubmit = this._form.querySelector('.popup__submit-button');
    this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
    this._buttonSubmitText = this._buttonSubmit.textContent;
  }

  _getInputValues() {
    const inputData = {};
    this._inputList.forEach((inputElement) => {
      inputData[inputElement.name] = inputElement.value;
    });
    return inputData;
  }

  showSave(save) {
    if (save) {
      this._buttonSubmit.textContent = 'Сохранение...';
    } else {
      this._buttonSubmit.textContent = this._buttonSubmitText;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleFormSubmit( this._getInputValues() );
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}