class SearchView {
    
    constructor() {
        this._parentE1 = document.querySelector('.search');
    }

    getQuery() {
        
        const query = this._parentE1.querySelector('.search__field').value;
        this._clearInput();
        return query;
    }

    _clearInput() {
       
        this._parentE1.querySelector('.search__field').value = '';
    }

    addHandlerSearch(handler) {
        
        this._parentE1.addEventListener('submit', function (e) {
            e.preventDefault();
            handler();
        });
    }
}

export default new SearchView();