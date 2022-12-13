import View from './View.js';
import icons from '../../img/icons.svg'; //Parcel 1

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      console.log(btn, goToPage);

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const nextPage = currentPage + 1;
    const prevPage = currentPage - 1;

    const nextButton = `<button data-goto="${nextPage}"class="btn--inline pagination__btn--next">
        <span>Page ${nextPage}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>`;

    const prevButton = `<button data-goto="${prevPage}"class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${prevPage}</span>
    </button>`;

    // console.log(this._data);

    // console.log(numPages);
    // Page 1, and there are other pages
    if (currentPage === 1 && numPages > 1) {
      return nextButton;
    }

    // Last page
    if (currentPage === numPages && numPages > 1) {
      return prevButton;
    }

    // Other page
    if (currentPage < numPages) {
      const arrBtn = [nextButton, prevButton];
      return arrBtn.map(btn => btn);
      // Page 1, and there are NO  others pages
    }
    return '';
  }
}
export default new PaginationView();
