export default class Card {
  constructor(cardData, currentUserId, functions, templateSelector) {
    this._cardData = cardData;
    this._dataLikes = cardData.likes;
    this._idCard = cardData._id;
    this._idUserCard = cardData.owner._id;
    this._currentUserId = currentUserId;
    this._template = templateSelector;
    this._handleCardClickFn = functions.handleCardClick;
    this._likeCardFn = functions.likeCard;
    this._handleDeleteCardFn = functions.handleDeleteCard;
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

  _isUserCard() {
    return this._idUserCard === this._currentUserId;
  }

  _isLikedCard() {
    return this._dataLikes.some((like) => {
      return like._id === this._currentUserId
    });
  }


  _setLikes(evt) {
    let isLiked = this._isLikedCard();
    this._likeCardFn(this, this._idCard, isLiked);
  }

  togleLikeCard(data) {
    this._dataLikes = data.likes;
    this._elementLikeButton.classList.toggle('element__like_active');
    this._elementLikeCounter.textContent = data.likes.length;
  }

  _addEventListeners() {
    this._elementLikeButton.addEventListener('click', (evt) => { this._setLikes(evt) });
    if (this._isUserCard()) { 
      this._elementDeleteButton.addEventListener('click', () => { this._handleDeleteCardFn(this._idCard, this) });
    }
    this._elementImage.addEventListener('click', () => { this._handleCardClickFn(this._cardData); });
  }


  generateCard() {
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector('.element__image');
    this._elementHeader = this._element.querySelector('.element__title');
    this._elementDeleteButton = this._element.querySelector('.element__delete');
    this._elementLikeButton = this._element.querySelector('.element__like');
    this._elementLikeCounter = this._element.querySelector('.element__like-counter');
    this._addEventListeners();
	  this._elementImage.src = this._cardData.link;
    this._elementImage.alt = this._cardData.name;
	  this._elementHeader.textContent = this._cardData.name;
    this._elementLikeCounter.textContent = this._cardData.likes.length;
    if (!this._isUserCard()) {
      this._elementDeleteButton.remove();
    }
    if (this._isLikedCard()) {
      this._elementLikeButton.classList.add('element__like_active');
    }
  	return this._element;
  }
}