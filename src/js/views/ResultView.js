import View from "./View.js";

class ResultsView extends View {
    constructor() {
        super();
        this._parentElement = document.querySelector('.results');
        this._errorMessage = 'No recipes found for your query';
        this._message = '';
    }

    _generateMarkupPreview(result) {
        return `
        <li class="preview">
        <a class="preview__link" href="#${result.id}">
          <figure class="preview__fig">
            <img src="${result.image}" alt="${result.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${result.title}</h4>
            <p class="preview__publisher">${result.publisher}</p>
          </div>
        </a>
      </li>
        `;
    }

    _generateMarkup() {
      return this._data.map(this._generateMarkupPreview).join('');
    }

    render(data) {
        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
}


export default new ResultsView();