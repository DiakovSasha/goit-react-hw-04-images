import { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export default function Modal({ onToggle, image }) {
  const { largeImageURL, tags } = image;

  useEffect(() => {
    window.addEventListener('keydown', onCloseEscape);
    return () => window.removeEventListener('keydown', onCloseEscape);
  });
  const onCloseEscape = e => {
    if (e.code === 'Escape') {
      onToggle();
      console.log(e.code);
    }
  };
  const onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onToggle();
    }
  };
  return (
    <div className={css.Overlay} onClick={onBackdropClick}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
}
Modal.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
};
