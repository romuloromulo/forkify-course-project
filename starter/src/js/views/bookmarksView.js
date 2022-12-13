import View from './View.js';
import PreviewView from './previewView.js';
import icons from '../../img/icons.svg'; //Parcel 1
import previewView from './previewView.js';

class bookMarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';
  _message = '';
  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
  _generateMarkup() {
    // console.log(this._data);
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new bookMarksView();
