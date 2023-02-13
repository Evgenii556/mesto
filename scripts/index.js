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
const popupCloseEdit = popupEdit.querySelector('.popup__close-icon');
const sumbitBtnEdit = popupEdit.querySelector('.popup__submit-button');
const nameInputEdit = popupFormEdit.querySelector('.popup__input_type_name');
const jobInputEdit = popupFormEdit.querySelector('.popup__input_type_job');


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

popupCloseEdit.addEventListener('click', function() {
  closePopup(popupEdit);
});

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitile.textContent = nameInputEdit.value;
  profileSubtitle.textContent = jobInputEdit.value;
  closePopup(popupEdit);
};

popupFormEdit.addEventListener('submit', handleFormSubmit);


const popupAdd = document.querySelector('.popup_type_add');
const popupCloseAdd = popupAdd.querySelector('.popup__close-icon');
const popupFormAdd = popupAdd.querySelector('.popup__form');
const sumbitBtnAdd = popupAdd.querySelector('.popup__submit-button');
const nameInputAdd = popupFormAdd.querySelector('.popup__input_type_name');
const jobInputAdd = popupFormAdd.querySelector('.popup__input_type_job');



addBtn.addEventListener('click', function() {
  openPopup(popupAdd);
});

popupCloseAdd.addEventListener('click', function() {
  closePopup(popupAdd);
});


const handleDeleteBtn = (evt) => {
  evt.target.closest('.element').remove();
}

const handleLikeBtn = (evt) => {
  evt.target.closest('.element__like').classList.toggle("element__like_active");
};

const popupImage = document.querySelector('.popup-image');
const popupImageTitle = popupImage.querySelector('.popup-image__title');
const popupImageImage = popupImage.querySelector('.popup-image__image');
const popupImageCloseIcon = popupImage.querySelector('.popup-image__close-icon');

const openPopupImage = (evt) => {
  popupImage.classList.add("popup-image_opened");
  popupImageImage.src = evt.target.closest('.element__image').src;
  const imageInfoTitle = evt.target.closest('.element');
  popupImageTitle.textContent = imageInfoTitle.querySelector('.element__title').textContent;
  popupImageImage.alt = imageInfoTitle.querySelector('.element__title').textContent;
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
  imageOpenBtn.addEventListener('click', openPopupImage);
  return elementElement;
};


function closePopupImage() {
  popupImage.classList.remove("popup-image_opened");
}

popupImageCloseIcon.addEventListener('click', closePopupImage);


const renderCard = (el, elementsCard) => {
  elementsCard.prepend(gotItemElement(el));
};

initialCards.forEach(function(el) {
  renderCard(el, elementsCard);
});

function handleFormSubmitAdd(evt) {
  evt.preventDefault();
  let el = {
    name: nameInputAdd.value,
    link: jobInputAdd.value
  };
  renderCard(el, elementsCard);
  closePopup(popupAdd);
  evt.target.reset()
};

popupFormAdd.addEventListener('submit', handleFormSubmitAdd)