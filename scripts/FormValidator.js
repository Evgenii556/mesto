export default class FormValidator {
  constructor(config, form){
    this._form = form;
    this._inputList = Array.from(this._form.querySelectorAll(config.inputSelector));
    this._submitButton = this._form.querySelector(config.submitButtonSelector);
    this._inputErrorClass = config.inputErrorClass;
    this._inputErrorActive = config.inputErrorActive;
    };
    
    _showInputError = (inputElement) => {
      this._errorElement = this._form.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add(this._inputErrorClass);
      this._errorElement.textContent = inputElement.validationMessage;
      this._errorElement.classList.add(this._inputErrorActive);
    };

    _hideInputError = (inputElement) => {
      this._errorElement = this._form.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove(this._inputErrorClass);
      this._errorElement.classList.remove(this._inputErrorActive);
      this._errorElement.textContent = '';
    };

    _checkValidation = (inputElement) => {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
          this._hideInputError(inputElement);
      }
    };

    toggleButtonStage () {
      if (this._hasInvalidInput(this._inputList)) {
        this._submitButton.setAttribute("disabled", true);
      } else {
          this._submitButton.removeAttribute("disabled", '');
      }
    };

  _setEventListeners () {
    this.toggleButtonStage();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkValidation(inputElement)
        this.toggleButtonStage()
      })
    })
  };

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  enableValidation() {
    this._setEventListeners();
  };
  
};