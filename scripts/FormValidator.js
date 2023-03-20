export default class FormValidator {
  constructor(config, form){
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inputErrorClass = config.inputErrorClass;
    this._inputErrorActive = config.inputErrorActive;
    this._form = form;
    }
    
    _showInputError = (inputElement, errorMessage) => {
      this._errorElement = this._form.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add(this._inputErrorClass);
      this._errorElement.textContent = errorMessage;
      this._errorElement.classList.add(this._inputErrorActive);
    };

    _hideInputError = (inputElement) => {
      this._errorElement = this._form.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove(this._inputErrorClass);
      this._errorElement.classList.remove(this._inputErrorActive);
      this._errorElement.textContent = '';
    };

    _isValid = (inputElement) => {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }
    }

    _toggleButtonStage () {
      this._inputList = this._form.querySelectorAll(this._inputSelector)
      this._submitButton = this._form.querySelector(this._submitButtonSelector);
      if (this._hasInvalidInput(this._inputList)) {
        this._submitButton.setAttribute("disabled", true);
      } 
      else {
        this._submitButton.removeAttribute("disabled");
      }
    }

  _setEventListeners () {
    this._toggleButtonStage()
    this._inputList = this._form.querySelectorAll(this._inputSelector)   
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement)
        this._toggleButtonStage()
      })
    })
  }

  _hasInvalidInput() {
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector))
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid
    })
  }

  enableValidation() {
    this._setEventListeners();
  }
  
}