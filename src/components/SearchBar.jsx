// implement SearchBar component here
import Proptypes from 'prop-types';
import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label" htmlFor="searchtextImput">
          Inclui o texto
        </label>
        <input
          data-testid="text-input"
          type="text"
          name="searchText"
          id="searchtextimput"
          value={searchText}
          onChange={onSearchTextChange}
        />


        <label data-testid="checkbox-input-label" htmlFor="checkboxfaves">
          Mostrar somente favoritos
        </label>
        <input
          data-testid="checkbox-input"
          type="checkbox"
          name="bookmarkedOnly"
          id="checkboxfaves"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />


        <label data-testid="select-input-label" htmlFor="labelselect">
          Filtrar por gênero
        </label>
        <select
          id="labelselect"
          data-testid="select-input"
          name="selectedGenre"
          value={selectedGenre}
          onChange={onSelectedGenreChange}
        >
          <option data-testid="select-option" value="">
            Todos
            </option>
          <option data-testid="select-option" value="action">
            Ação
            </option>
          <option data-testid="select-option" value="comedy">
            Comédia
            </option>
          <option data-testid="select-option" value="thriller">
            Suspense
            </option>
        </select>

      </form>
    );
  }
}
SearchBar.propTypes = {
  searchText: Proptypes.string.isRequired,
  onSearchTextChange: Proptypes.func.isRequired,
  bookmarkedOnly: Proptypes.bool.isRequired,
  onBookmarkedChange: Proptypes.func.isRequired,
  selectedGenre: Proptypes.string.isRequired,
  onSelectedGenreChange: Proptypes.func.isRequired,
};

export default SearchBar;
