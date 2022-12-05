import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = { query: '' };

  handleInputChange = event => {
    const { value } = event.currentTarget;

    this.setState({ query: value });
  };
  handleInputSubmit = event => {
    event.preventDefault();
    const { query } = this.state;
    const { onSubmit } = this.props;
    onSubmit(query.toLowerCase().trim());
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleInputSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <BsSearch className={css.svgIcon} />
            <span className={css.SearchFormButtonLabel}></span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos..."
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
