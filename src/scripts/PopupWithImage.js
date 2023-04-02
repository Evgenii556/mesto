import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageToView = this._popupElement.querySelector('.popup__image');
    this._imageCaption = this._popupElement.querySelector('.popup__capture');
  }

  open({link, name}) {
    this._imageToView.src = link;
    this._imageToView.alt = name;
    this._imageCaption.textContent = name;
    super.open();
  }
}