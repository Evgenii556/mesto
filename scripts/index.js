const elementsCard = document.querySelector('.elements')
const elementsTemplate = document.getElementById('item').content

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



let profile = document.querySelector('.profile');
let editBtn = profile.querySelector('.profile__edit-button');
let profileTitile = profile.querySelector('.profile__title');
let profileSubtitle = profile.querySelector('.profile__subtitle');
let AddBtn = profile.querySelector('.profile__button-add');


let popupEdit = document.querySelector('.popup_type_edit');
let popupFormEdit = popupEdit.querySelector('.popup__form');
let popupCloseEdit = popupEdit.querySelector('.popup__close-icon');
let sumbitBtnEdit = popupEdit.querySelector('.popup__submit-button');
let nameInputEdit = popupFormEdit.querySelector('.popup__input_type_name');
let jobInputEdit = popupFormEdit.querySelector('.popup__input_type_job');

function openPopupProfile() {
  popupEdit.classList.add("popup_opened");
  nameInputEdit.value = profileTitile.textContent;
  jobInputEdit.value = profileSubtitle.textContent;
};

function closePopupProfile() {
  popupEdit.classList.remove("popup_opened");
};

editBtn.addEventListener('click', openPopupProfile);
popupCloseEdit.addEventListener('click', closePopupProfile);

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitile.textContent = nameInputEdit.value;
  profileSubtitle.textContent = jobInputEdit.value;
  closePopupProfile();
};

popupFormEdit.addEventListener('submit', handleFormSubmit);


let popupAdd = document.querySelector('.popup_type_add');
let popupCloseAdd = popupAdd.querySelector('.popup__close-icon');
let popupFormAdd = popupAdd.querySelector('.popup__form');
let sumbitBtnAdd = popupAdd.querySelector('.popup__submit-button');
let nameInputAdd = popupFormAdd.querySelector('.popup__input_type_name');
let jobInputAdd = popupFormAdd.querySelector('.popup__input_type_job');





function openPopupAdd() {
  popupAdd.classList.add("popup_opened");
};

function closePopupAdd() {
  popupAdd.classList.remove("popup_opened");
};


AddBtn.addEventListener('click', openPopupAdd);
popupCloseAdd.addEventListener('click', closePopupAdd)


const handleDeleteBtn = (evt) => {
  evt.target.closest('.element').remove();
}

const handleLikeBtn = (evt) => {
  evt.target.closest('.element__like').classList.toggle("element__like_active");
};

let popupImage = document.querySelector('.popup-image');
let popupImageTitle = popupImage.querySelector('.popup-image__title');
let popupImageImage = popupImage.querySelector('.popup-image__image');
let popupImageCloseIcon = popupImage.querySelector('.popup-image__close-icon');

const openPopupImage = (evt) => {
  popupImage.classList.add("popup-image_opened");
  popupImageImage.src = evt.target.closest('.element__image').src;
  const imageInfoTitle = evt.target.nextElementSibling;
  popupImageTitle.textContent = imageInfoTitle.querySelector('.element__title').textContent;
};



let gotItemElement = (el) => {
  const elementElement = elementsTemplate.cloneNode(true);
  elementElement.querySelector('.element__title').textContent = el.name;
  elementElement.querySelector('.element__image').src = el.link;
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


let renderCard = (el, elementsCard) => {
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
  closePopupAdd();
};

popupFormAdd.addEventListener('submit', handleFormSubmitAdd)