import './index.css'
import Api from "../components/Api.js";
import Card from "../components/Card.js"
import FormValidator from "../components/FormValidator.js";
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupConfirm from '../components/PopupConfirm.js';


const config = {
  inputErrorClass: 'popup__input_type_error',
  inputErrorActive: 'popup__input-error_active',
  submitButtonSelector: '.popup__submit-button',
  formSelector: '.popup__form',
  inputSelector: '.popup__input'
};


const content = document.querySelector('.content');
const buttonEditAvatar = content.querySelector('.profile__avatar-button');
const popupProfileOpenButton = content.querySelector('.profile__edit-button');
const popupCardAddButton = content.querySelector('.profile__button-add');
const formEditProfile = content.querySelector('.popup__form_type_edit');
const formEditAvatar = content.querySelector('.popup__form_type_avatar');
const nameInputEdit = formEditProfile.querySelector('.popup__input_type_name');
const jobInputEdit = formEditProfile.querySelector('.popup__input_type_job');
const formAddCard = content.querySelector('.popup__form_type_add');

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: '6a959611-dfd2-455f-b813-ecc56a298ccb',
    'Content-Type': 'application/json'
  }
});


let currentUserId = '';

api.getData()
  .then((result) => {
    const [ apiUser, apiCards ] = result;
    userInfo.setUserInfo(apiUser);
    userInfo.setUserAvatar(apiUser);
    currentUserId = apiUser._id;
    section.renderItems(apiCards);
  })
  .catch((err) => {
    console.log(err);
  });

const section = new Section (addCard, '.elements');


const userInfo = new UserInfo({name: '.profile__title', info: '.profile__subtitle', avatar: '.profile__avatar'});

const popupFormEditProfile = new PopupWithForm('.popup_type_edit', handleFormSubmitProfile);

const validFormEditProfile = new FormValidator(config, formEditProfile);

validFormEditProfile.enableValidation();

function handleFormSubmitProfile(inputData) {
  popupFormEditProfile.showSave(true);
  api.editUserInfo(inputData.name, inputData.job)
    .then((result) => {
      userInfo.setUserInfo({name: result.name, about: result.about});
      popupFormEditProfile.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupFormEditProfile.showSave(false);
    });
}

popupProfileOpenButton.addEventListener('click', function () {
  const {name, info} = userInfo.getUserInfo();
  nameInputEdit.value = name;
  jobInputEdit.value = info;
  validFormEditProfile.resetValidateEror();
  popupFormEditProfile.open();
});

popupFormEditProfile.setEventListeners();


const popupFormEditAvatar = new PopupWithForm('.popup_edit-avatar', handleFormSubmitAvatar);

popupFormEditAvatar.setEventListeners();


const validFormAvatar = new FormValidator(config, formEditAvatar);

validFormAvatar.enableValidation();


function handleFormSubmitAvatar(inputData) {
  popupFormEditAvatar.showSave(true);
  api.editAvatar(inputData.avatar)
    .then((result) => {
      userInfo.setUserAvatar({ avatar: result.avatar });
      popupFormEditAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupFormEditAvatar.showSave(false);
    });
}

buttonEditAvatar.addEventListener('click', function () {
  const data = userInfo.getUserAvatar();
  validFormAvatar.resetValidateEror();
  popupFormEditAvatar.open();
});




const popupFormAddCard = new PopupWithForm('.popup_type_add', handleFormSubmitCard);

const validFormAddCard = new FormValidator(config, formAddCard);

validFormAddCard.enableValidation();

function handleFormSubmitCard(inputData) {
  const data = {name: inputData.title, link: inputData.image};
  popupFormAddCard.showSave(true);
  api.addCard(data)
    .then((result) => {
      addCard(result);
      popupFormAddCard.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupFormAddCard.showSave(false);
    });
}

popupCardAddButton.addEventListener('click', () => {
  validFormAddCard.resetValidateEror();
  popupFormAddCard.showSave(false)
  popupFormAddCard.open()
});

popupFormAddCard.setEventListeners();


const popupImage = new PopupWithImage('.popup_type_image');

popupImage.setEventListeners();

function handleCardClick(data) {
  popupImage.open(data);
}

const popupConfirm = new PopupConfirm('.popup_confirm');

popupConfirm.setEventListeners();

function handleDeleteCard(idCard, thisCard) {

  popupConfirm.confirmDeletion(idCard, thisCard, deleteThisCard);

  popupConfirm.open();
}

function deleteThisCard(idCard, thisCard) {
  popupConfirm.showSave(true);
  api.deleteCard(idCard)
    .then(result => {
      thisCard._deleteCard();
      popupConfirm.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupConfirm.showSave(false);
    });
}

function likeCard(data, idCard, isLiked) {
  api.setLike(idCard, isLiked)
    .then(result => {
      data.togleLikeCard(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function createCard(cardData) {
  const card = new Card(cardData, currentUserId, {handleCardClick, likeCard, handleDeleteCard}, '#item');
  return card.generateCard();
}


function addCard(cardData) {
  section.addItem( createCard(cardData) );
}


