import * as model from './model.js';
import RecipeView from './views/RecipeView.js';
import SearchView from './views/searchViews.js';
import ResultsView from './views/ResultView.js';
import PaginationView from './views/paginationView.js';

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    RecipeView.renderSpinner();

    await model.loadRecipe(id);

    RecipeView.render(model.state.recipe);
    }  catch (err) {
      RecipeView.renderError(err.message);
    }
    };

    const controlSearchResults = async function () {
      try {
        const query = SearchView.getQuery();
        if (!query) return;

        await model.loadSearchResults(query);

        const results = model.getSearchResultsPage();
        if (results.length === 0) {
          ResultsView.renderError();
          return;
        }

        ResultsView.render(model.getSearchResultsPage());
        PaginationView.render(model.state.search);
      } catch (err) {
        console.error(err);
      }
      };

      const controlPagination = function (goToPage) {
        ResultsView.render(model.getSearchResultsPage(goToPage));
        PaginationView.render(model.state.search);
      };

      const init = function () {
        RecipeView.addHandlerRender(controlRecipes);
        SearchView.addHandlerSearch(controlSearchResults);
        PaginationView.addHandlerClick(controlPagination);
      };

      init();
  