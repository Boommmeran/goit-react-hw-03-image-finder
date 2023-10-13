import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Content, ModalImg } from './Modal.styled';

const ModalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  }

  keyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  onOverlayClose = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.onOverlayClose}>
        <Content>
          <ModalImg src={this.props.imgModal} alt="pictureModal" />
        </Content>
      </Overlay>,
      ModalRoot
    );
  }
}
