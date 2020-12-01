// implement MovieLibrary component here
import Proptypes from 'prop-types';
import React from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
      currentMovies: this.props.movies,
    };
  }
  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value }, () =>
      this.setState({
        currentMovies: this.props.movies.filter(
          (movie) => (movie.title.includes(this.state.searchText) ||
            movie.subtitle.includes(this.state.searchText) ||
            movie.storyline.includes(this.state.searchText)) &&
            (this.state.bookmarkedOnly ? movie.bookmarked === true : true) &&
            (this.state.selectedGenre === '' ? true : movie.genre === this.state.selectedGenre),
        ),
      }));
  }

  addNewMovie(movieDetails) {
    this.setState((state) => ({
      movies: state.movies.concat(movieDetails),
      currentMovies: state.movies.concat(movieDetails),
    }));
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.handleChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.handleChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.handleChange}
        />
        <MovieList
          movies={this.state.currentMovies}
        />
        <AddMovie
          onClick={this.addNewMovie}
        />
      </div>
    );
  }
}
MovieLibrary.propTypes = { movies: Proptypes.arrayOf(Proptypes.object).isRequired };
export default MovieLibrary;

