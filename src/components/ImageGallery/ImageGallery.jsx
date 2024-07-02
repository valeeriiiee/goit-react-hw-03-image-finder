import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ photos }) => {
  return (
    <ul className={css.imageGallery}>
      {photos.map(({ id, webFormatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webFormatURL={webFormatURL}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      ))}
    </ul>
  );
};
