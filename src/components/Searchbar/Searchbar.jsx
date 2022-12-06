import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    const { value } = event.currentTarget;

    setQuery(value);
  };
  const handleInputSubmit = event => {
    event.preventDefault();

    onSubmit(query.toLowerCase().trim());
    setQuery('');
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleInputSubmit}>
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
          value={query}
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
