let profile = document.querySelector('.profile');
let editBtn = profile.querySelector('.profile__edit-button');
let profileTitile = profile.querySelector('.profile__title');
let profileSubtitle = profile.querySelector('.profile__subtitle');

let popup = document.querySelector('.popup');
let popapForm = popup.querySelector('.popup__form');
let popapClose = popup.querySelector('.popup__close-icon');

let sumbitBtn = popup.querySelector('.popup__submit-button');
let nameInput = popapForm.querySelector('.popup__input_type_name');
let jobInput = popapForm.querySelector('.popup__input_type_job');

function openPopapProfile() {
  popup.classList.add("popup_opened");
  nameInput.value = profileTitile.textContent;
  jobInput.value = profileSubtitle.textContent;
};

function closePopapProfile() {
  popup.classList.remove("popup_opened");
}

editBtn.addEventListener('click', openPopapProfile);
popapClose.addEventListener('click', closePopapProfile);

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitile.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopapProfile();
};

popapForm.addEventListener('submit', handleFormSubmit);