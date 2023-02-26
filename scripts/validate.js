const config = {
  inputErrorClass: 'popup__input_type_error',
  inputErrorActive: 'popup__input-error_active',
  submitButtonSelector: '.popup__submit-button',
  formSelector: '.popup__form',
  inputSelector: '.popup__input'
};

const showInputError = (formElement, inputElement, errorMessage, conf) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(conf.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(conf.inputErrorActive);
};


const hideInputError = (formElement, inputElement, conf) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(conf.inputErrorClass);
  errorElement.classList.remove(conf.inputErrorActive);
  errorElement.textContent = '';
};


const checkInputValidity = (formElement, inputElement, conf) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, conf);
  } else {
    hideInputError(formElement, inputElement, conf);
  }
};


const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};


const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', '');
  } else {
    buttonElement.removeAttribute('disabled');
  }
};


const setEventListeners = (formElement, conf) => {
  const inputList = Array.from(formElement.querySelectorAll(conf.inputSelector));
  const buttonElement = formElement.querySelector(conf.submitButtonSelector);


  toggleButtonState(inputList, buttonElement);


  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, conf);
      toggleButtonState(inputList, buttonElement);
    });
  });
};


const enableValidation = (conf) => {
  const formList = Array.from(document.querySelectorAll(conf.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, conf);
  });
};

enableValidation(config);