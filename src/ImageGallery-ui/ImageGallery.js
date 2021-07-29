import React from 'react';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem-ui/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, onImgClick }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images &&
        images.map(({ id, webformatURL, tags }) => {
          return (
            <ImageGalleryItem
              key={id}
              id={id}
              img={webformatURL}
              tags={tags}
              onImgClick={onImgClick}
            />
          );
        })}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImgClick: PropTypes.func.isRequired,
};

export default ImageGallery;
