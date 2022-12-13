import View from './View.js';
import icons from '../../img/icons.svg'; //Parcel 1
import previewView from './previewView.js';
class resultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again! ;)';
  _message = '';

  _generateMarkup() {
    // console.log(this._data);
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new resultsView();
