export default class Card {
  constructor({cardData, handleCardClick}, templateSelector) {
    this._cardData = cardData;
    this._template = templateSelector;
    this._handleCardClickFn = handleCardClick;
  }

  _getTemplate() {
    return document.querySelector(this._template)
        .content
        .children[0]
        .cloneNode(true);
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _likeCard() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  _addEventListeners() {
    this._elementLike = this._element.querySelector('.element__like');

    this._element.querySelector('.element__delete').addEventListener('click', () => { this._deleteCard(); });
    this._elementLike.addEventListener('click', () => { this._likeCard(); });
    this._elementImage.addEventListener('click', () => { this._handleCardClickFn(this._cardData); });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector('.element__image');
    this._elementHeader = this._element.querySelector('.element__title');

    this._addEventListeners();

	  this._elementImage.src = this._cardData.link;
    this._elementImage.alt = this._cardData.name;
	  this._elementHeader.textContent = this._cardData.name;

  	return this._element;
  }
}