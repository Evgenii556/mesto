const elementsCard = document.querySelector('.elements')
const elementsTemplate = document.querySelector('#item').content

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



const profile = document.querySelector('.profile');
const editBtn = profile.querySelector('.profile__edit-button');
const profileTitile = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');
const addBtn = profile.querySelector('.profile__button-add');

const popupEdit = document.querySelector('.popup_type_edit');
const popupFormEdit = popupEdit.querySelector('.popup__form');
const sumbitBtnEdit = popupEdit.querySelector('.popup__submit-button');
const nameInputEdit = popupFormEdit.querySelector('.popup__input_type_name');
const jobInputEdit = popupFormEdit.querySelector('.popup__input_type_job');

const closeButtons = document.querySelectorAll('.popup__close-icon');
const popupOverlay = document.querySelectorAll('.popup');

const popupAdd = document.querySelector('.popup_type_add');
const popupFormAdd = popupAdd.querySelector('.popup__form');
const sumbitBtnAdd = popupAdd.querySelector('.popup__submit-button');
const nameInputAdd = popupFormAdd.querySelector('.popup__input_type_name');
const jobInputAdd = popupFormAdd.querySelector('.popup__input_type_job');

const popupImage = document.querySelector('.popup_type_image');
const popupImageTitle = popupImage.querySelector('.popup__capture');
const popupImageImage = popupImage.querySelector('.popup__image');


function openPopup(popup) {
  popup.classList.add("popup_opened");
};


function closePopup(popup) {
  popup.classList.remove("popup_opened");
};

editBtn.addEventListener('click', function() {
  openPopup(popupEdit);
  nameInputEdit.value = profileTitile.textContent;
  jobInputEdit.value = profileSubtitle.textContent;
});


function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitile.textContent = nameInputEdit.value;
  profileSubtitle.textContent = jobInputEdit.value;
  closePopup(popupEdit);
};

popupFormEdit.addEventListener('submit', handleFormSubmit);


addBtn.addEventListener('click', function() {
  openPopup(popupAdd);
});


const handleDeleteBtn = (evt) => {
  evt.target.closest('.element').remove();
}

const handleLikeBtn = (evt) => {
  evt.target.closest('.element__like').classList.toggle("element__like_active");
};


const gotItemElement = (el) => {
  const elementElement = elementsTemplate.cloneNode(true);
  elementElement.querySelector('.element__title').textContent = el.name;
  elementElement.querySelector('.element__image').src = el.link;
  elementElement.querySelector('.element__image').alt = el.name;
  const deleteCardBtn = elementElement.querySelector('.element__delete');
  deleteCardBtn.addEventListener('click', handleDeleteBtn)
  const likeCardBtn = elementElement.querySelector('.element__like');
  likeCardBtn.addEventListener('click', handleLikeBtn);
  const imageOpenBtn = elementElement.querySelector('.element__image');
  imageOpenBtn.addEventListener('click', function(evt) {
    openPopup(popupImage);
    popupImageImage.src = evt.target.closest('.element__image').src;
    const imageInfoTitle = evt.target.closest('.element');
    popupImageTitle.textContent = imageInfoTitle.querySelector('.element__title').textContent;
    popupImageImage.alt = imageInfoTitle.querySelector('.element__title').textContent;
  });
  return elementElement;
};


const renderCard = (el, elementsCard) => {
  elementsCard.prepend(gotItemElement(el));
};

initialCards.forEach(function(el) {
  renderCard(el, elementsCard);
});

function handleFormSubmitAdd(evt) {
  evt.preventDefault();
  const el = {
    name: nameInputAdd.value,
    link: jobInputAdd.value
  };
  renderCard(el, elementsCard);
  closePopup(popupAdd);
  evt.target.reset()
};

popupFormAdd.addEventListener('submit', handleFormSubmitAdd);


closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});


popupOverlay.forEach((popupOver) => {
  const popup = popupOver.closest('.popup');
  popup.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(popup);
    };
  });
});

document.addEventListener('keydown', function(evt) {
  const popupIsOpen = document.querySelector('.popup_opened')
  if (evt.key === 'Escape' && popupIsOpen) {
    closePopup(popupIsOpen);
  };
});


//----------------------------------------------------------------------
// Валидация форм

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};


const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
};


const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};


const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};


const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__submit-button_inactive');
  } else {
    buttonElement.classList.remove('popup__submit-button_inactive');
  }
}; 


const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__submit-button');


  toggleButtonState(inputList, buttonElement);


  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
}; 


const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(fieldset);
  });
};

enableValidation();