export default class Section {
    constructor(renderer, sectionSelector) {
      this._renderer = renderer;
      this._section = document.querySelector(sectionSelector);
    }
  
    renderItems(data) { 
      data.reverse().forEach( item => this._renderer(item) );
    }
  
    addItem(element) {
      this._section.prepend(element);
    }
  }