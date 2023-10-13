
import { Component } from 'react';
import { Modal } from '../Modal';
import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { toggleModal } = this;
    const { imgUrl, largeImg, tags } = this.props;

    return (
      <>
        <GalleryItem>
          <GalleryImg src={imgUrl} alt={tags} onClick={toggleModal} />
          {this.state.showModal && (
            <Modal onClose={toggleModal} imgModal={largeImg} />
          )}
        </GalleryItem>
      </>
    );
  }
}
