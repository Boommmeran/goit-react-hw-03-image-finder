import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { StyledImageGallery } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <StyledImageGallery>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          imgUrl={webformatURL}
          tags={tags}
          largeImg={largeImageURL}
        />
      ))}
    </StyledImageGallery>
  );
};
