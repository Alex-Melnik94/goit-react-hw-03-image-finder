import { Component } from 'react';
import styles from './styles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchImages } from './api';

import ImageGallery from './ImageGallery-ui/ImageGallery';
import Searchbar from './Searchbar-ui/Searchbar';
import Button from './Button-ui/Button';
import Modal from './Modal-ui/Modal';
import Loader from 'react-loader-spinner';

export default class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    status: 'idle',
    loader: false,
    openModal: false,
    modalImg: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, searchQuery } = this.state;

    if (searchQuery !== prevState.searchQuery || page > prevState.page) {
      if (page === 1) {
        this.setState({ images: [] });
      }
      this.setState({ loader: true });
      fetchImages(searchQuery, page)
        .then(res => {
          const { hits } = res;
          if (hits.length === 0) {
            toast.error('Nothing was found for your query.');
          }
          this.setState(prevState => ({
            status: 'resolved',
            images: [...prevState.images, ...hits],
          }));
        })
        .catch(() => {
          this.setState({ status: 'rejected' });
        })
        .finally(() => {
          this.setState({ loader: false });
          if (this.state.images.length > 12) {
            this.scroll();
          }
        });
    }
  }

  handleBtnClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      loader: true,
    }));
  };

  showModal = () => {
    this.setState(prevState => {
      return { openModal: !prevState.openModal };
    });
  };

  onImgClick = id => {
    const { images } = this.state;
    const imgForModal = images.find(image => image.id === id);
    this.setState({ modalImg: imgForModal });
    this.showModal();
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery, page: 1 });
  };

  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { status, images, loader, openModal, modalImg } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {status === 'idle' && null}
        {status === 'resolved' ? (
          <div>
            <ImageGallery images={images} onImgClick={this.onImgClick} />
            {images.length >= 12 && loader === false ? (
              <Button onClick={this.handleBtnClick} />
            ) : null}
          </div>
        ) : null}
        {loader && (
          <Loader
            className="loader"
            type="ThreeDots"
            color="#FF0000"
            height={100}
            width={100}
          />
        )}
        {status === 'rejected' && toast.error('Some proplems with server')}
        {openModal && <Modal openModal={this.showModal} modalImg={modalImg} />}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
