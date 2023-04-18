import Popup from './Popup.js';

export default class PopupConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popupElement.querySelector('.popup__form');
    this._buttonSubmit = this._form.querySelector('.popup__submit-button');
    this._buttonSubmitText = this._buttonSubmit.textContent;
  }

  confirmDeletion(idCard, thisCard, deleteThisCard) {
    this._idCard = idCard;
    this._thisCard = thisCard;
    this._deleteThisCardFn = deleteThisCard;
  }

  showSave(isSave) {
    if (isSave) {
      this._buttonSubmit.textContent = 'Удаление...';
    } else {
      this._buttonSubmit.textContent = this._buttonSubmitText;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();

      this._deleteThisCardFn(this._idCard, this._thisCard);
    });

  }

}
