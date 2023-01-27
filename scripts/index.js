let page = document.querySelector('.page');
let content = page.querySelector('.content');
let profile = content.querySelector('.profile');
let profileInfo = profile.querySelector('.profile__info');
let infoRow = profileInfo.querySelector('.profile__info-row');
let editBtn = infoRow.querySelector('.profile__edit-button');
let profileTitile = infoRow.querySelector('.profile__title');
let profileSubtitle = profile.querySelector('.profile__subtitle');

let popap = content.querySelector('.popap');
let popapContainer = popap.querySelector('.popap__container');
let popapForm = popapContainer.querySelector('.popap__form');
let popapClose = popapContainer.querySelector('.popap__close-icon');

let elements = content.querySelector('.elements');
let element = elements.querySelector('.elements__element');
let elementInfo = element.querySelector('.elements__image-info');
let likeBtn = elementInfo.querySelector('.elements__like');

let sumbitBtn = popapContainer.querySelector('.popap__submit-button');
let nameInput = popapForm.querySelector('.popap__name');
let jobInput = popapForm.querySelector('.popap__info');

function openPopapProfile() {
  popap.classList.toggle("popap_opened");
  nameInput.value = profileTitile.textContent;
  jobInput.value = profileSubtitle.textContent;
};

function closePopapProfile() {
  popap.classList.toggle("popap_opened");
}

editBtn.addEventListener('click', openPopapProfile);
popapClose.addEventListener('click', closePopapProfile);


function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitile.textContent = `${nameInput.value}`;
  profileSubtitle.textContent = `${jobInput.value}`;
  closePopapProfile();
}

sumbitBtn.addEventListener('click', handleFormSubmit);