import '../pages/index.css'
import Card from "./Card.js"
import FormValidator from "./FormValidator.js";
import Section from './Section.js';
import UserInfo from './UserInfo.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';


const config = {
  inputErrorClass: 'popup__input_type_error',
  inputErrorActive: 'popup__input-error_active',
  submitButtonSelector: '.popup__submit-button',
  formSelector: '.popup__form',
  inputSelector: '.popup__input'
};


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


const content = document.querySelector('.content');
const popupProfileOpenButton = content.querySelector('.profile__edit-button');
const popupCardAddButton = content.querySelector('.profile__button-add');
const formEditProfile = content.querySelector('.popup__form_type_edit');
const nameInputEdit = formEditProfile.querySelector('.popup__input_type_name');
const jobInputEdit = formEditProfile.querySelector('.popup__input_type_job');
const formAddCard = content.querySelector('.popup__form_type_add');


const section = new Section (addCard, '.elements');
section.renderItems(initialCards);

const userInfo = new UserInfo({name: '.profile__title', info: '.profile__subtitle'});

const popupFormEditProfile = new PopupWithForm('.popup_type_edit', handleFormSubmitProfile);

const validFormEditProfile = new FormValidator(config, formEditProfile);

validFormEditProfile.enableValidation();

function handleFormSubmitProfile(inputData) {
  userInfo.setUserInfo(inputData);
}

popupProfileOpenButton.addEventListener('click', function () {
  const {name, info} = userInfo.getUserInfo();
  nameInputEdit.value = name;
  jobInputEdit.value = info;
  validFormEditProfile.resetValidateEror();
  popupFormEditProfile.open();
});

popupFormEditProfile.setEventListeners();


const popupFormAddCard = new PopupWithForm('.popup_type_add', handleFormSubmitCard);

const validFormAddCard = new FormValidator(config, formAddCard);

validFormAddCard.enableValidation();

function handleFormSubmitCard(inputData) {
  const items = {
    name: inputData.title,
    link: inputData.image
  };
  addCard(items);
}

popupCardAddButton.addEventListener('click', () => {
  validFormAddCard.resetValidateEror();
  popupFormAddCard.open()
});

popupFormAddCard.setEventListeners();


const popupImage = new PopupWithImage('.popup_type_image');

popupImage.setEventListeners();

function handleCardClick(data) {
  popupImage.open(data);
}

function createCard(cardData) {
  const card = new Card({cardData, handleCardClick}, '#item');
  return card.generateCard();
}

function addCard(cardData) {
  section.addItem( createCard(cardData) );
}