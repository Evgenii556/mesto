export default class Section {
    constructor(sectionSelector) {
      this._section = document.querySelector(sectionSelector);
    }

    addItems(elements) {
      this._section.append(elements);
    }
  
    addItem(element) {
      this._section.prepend(element);
    }
  }