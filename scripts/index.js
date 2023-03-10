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
const popupProfileOpenButton = profile.querySelector('.profile__edit-button');
const profileTitile = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');
const popupCardAddButton = profile.querySelector('.profile__button-add');

const popupEdit = document.querySelector('.popup_type_edit');
const popupFormEdit = popupEdit.querySelector('.popup__form');
const popupEditSubmitButton = popupEdit.querySelector('.popup__submit-button');
const nameInputEdit = popupFormEdit.querySelector('.popup__input_type_name');
const jobInputEdit = popupFormEdit.querySelector('.popup__input_type_job');

const buttonsClose = document.querySelectorAll('.popup__close-icon');
const popupOverlays = document.querySelectorAll('.popup');

const popupAdd = document.querySelector('.popup_type_add');
const popupFormAdd = popupAdd.querySelector('.popup__form');
const popupAddSubmitButton = popupAdd.querySelector('.popup__submit-button');
const nameInputAdd = popupFormAdd.querySelector('.popup__input_type_name');
const jobInputAdd = popupFormAdd.querySelector('.popup__input_type_job');

const popupImage = document.querySelector('.popup_type_image');
const popupImageTitle = popupImage.querySelector('.popup__capture');
const popupImageImage = popupImage.querySelector('.popup__image');


function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closeByEsc);
};


function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closeByEsc);
};

popupProfileOpenButton.addEventListener('click', function() {
  openPopup(popupEdit);
  nameInputEdit.value = profileTitile.textContent;
  jobInputEdit.value = profileSubtitle.textContent;
  popupEditSubmitButton.removeAttribute('disabled');
});


function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitile.textContent = nameInputEdit.value;
  profileSubtitle.textContent = jobInputEdit.value;
  closePopup(popupEdit);
};

popupFormEdit.addEventListener('submit', handleFormSubmit);


popupCardAddButton.addEventListener('click', function() {
  openPopup(popupAdd);
});


const handleDeleteBtn = (evt) => {
  evt.target.closest('.element').remove();
}

const handleLikeBtn = (evt) => {
  evt.target.closest('.element__like').classList.toggle("element__like_active");
};


const createCard = (el) => {
  const cardElement = elementsTemplate.cloneNode(true);
  cardElement.querySelector('.element__title').textContent = el.name;
  const cardElementImage = cardElement.querySelector('.element__image')
  cardElementImage.src = el.link;
  cardElementImage.alt = el.name;
  const deleteCardBtn = cardElement.querySelector('.element__delete');
  deleteCardBtn.addEventListener('click', handleDeleteBtn)
  const likeCardBtn = cardElement.querySelector('.element__like');
  likeCardBtn.addEventListener('click', handleLikeBtn);
  const imageOpenBtn = cardElement.querySelector('.element__image');
  imageOpenBtn.addEventListener('click', function(evt) {
    openPopup(popupImage);
    popupImageImage.src = evt.target.closest('.element__image').src;
    const imageInfoTitle = evt.target.closest('.element');
    popupImageTitle.textContent = imageInfoTitle.querySelector('.element__title').textContent;
    popupImageImage.alt = imageInfoTitle.querySelector('.element__title').textContent;
  });
  return cardElement;
};


const renderCard = (el, elementsCard) => {
  elementsCard.prepend(createCard(el));
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
  evt.target.reset();
  popupAddSubmitButton.setAttribute('disabled', '');
};

popupFormAdd.addEventListener('submit', handleFormSubmitAdd);


buttonsClose.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});


popupOverlays.forEach((popupOver) => {
  const popup = popupOver.closest('.popup');
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(popup);
    };
  });
});


function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};

