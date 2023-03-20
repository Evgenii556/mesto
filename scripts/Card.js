export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name
    this._link = data.link
    this._templateSelector = templateSelector
    this._handleCardClick = handleCardClick
  }
  _getTemplate() {
    const cardElement = document.querySelector('#item').content.querySelector('.element').cloneNode(true)
    return cardElement
  }
  generateCard() {
    this._element = this._getTemplate()
    this._cardElementImage = this._element.querySelector('.element__image')
    this._cardElementTitle = this._element.querySelector('.element__title')
    this._likeButton = this._element.querySelector('.element__like');
    this._deleteButton = this._element.querySelector('.element__delete')
    this._cardElementImage.src = this._link
    this._cardElementImage.alt = this._link
    this._cardElementTitle.textContent = this._name
    this._setEventListeners();
    return this._element
  }
  _clickLike() {
    this._likeButton.classList.toggle('element__like_active')
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
  }


  _setEventListeners() {
    this._cardElementImage.addEventListener('click', () =>
      this._handleCardClick({
        link: this._link,
        name: this._name,
      }));
    this._likeButton.addEventListener('click', () => this._clickLike())
    this._deleteButton.addEventListener('click', () => this._deleteCard())
  }

}