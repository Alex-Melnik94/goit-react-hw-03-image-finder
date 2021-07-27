import React from 'react';
import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ images, onClick }) => {
  return images.map(({ id, webformatURL, tags }) => {
    return (
      <li
        key={id}
        className={styles.ImageGalleryItem}
        onClick={() => {
          onClick(id);
        }}
      >
        <img
          src={webformatURL}
          alt={tags}
          className={styles.ImageGalleryItemImage}
        />
      </li>
    );
  });
};

ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
