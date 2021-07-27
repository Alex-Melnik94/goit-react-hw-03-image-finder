import { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscCloseModal);
  }

  onEscCloseModal = e => {
    if (e.code === 'Escape') {
      this.props.openModal();
    }
  };

  onCloseModal = e => {
    if (e.currentTarget === e.target) {
      this.props.openModal();
    }
  };

  render() {
    const { modalImg } = this.props;
    return createPortal(
      <div className={styles.Overlay} onClick={this.onCloseModal}>
        <div className={styles.Modal}>
          <img src={modalImg.largeImageURL} alt={modalImg.tags} />
        </div>
      </div>,
      modalRoot,
    );
  }
}
