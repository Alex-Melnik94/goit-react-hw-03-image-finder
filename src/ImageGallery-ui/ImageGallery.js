import { PureComponent } from 'react';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem-ui/ImageGalleryItem';
import Loader from 'react-loader-spinner';
import Button from '../Button-ui/Button';
import Modal from '../Modal-ui/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class ImageGallery extends PureComponent {
  state = {
    images: [],
    page: 1,
    status: 'idle',
    loader: false,
    openModal: false,
    modalImg: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, initialPage } = this.props;
    const { page } = this.state;

    if (query !== prevProps.query) {
      this.setState({ images: [], page: 1, loader: true });
      this.fetchImages(query, initialPage);
    }

    if (this.state.page > prevState.page) {
      this.fetchImages(query, page);
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

  fetchImages = (query, page) => {
    const URL = 'https://pixabay.com/api/';
    const API_KEY = '21964701-aaf906e928d661c46acce114f';

    return fetch(
      `${URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(new Error('Some proplems with server'));
      })
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
      <div className={styles.container}>
        {status === 'idle' && null}

        {status === 'resolved' ? (
          <div className={styles.container}>
            <ul className={styles.ImageGallery}>
              <ImageGalleryItem images={images} onClick={this.onImgClick} />
            </ul>
            {images.length >= 12 && loader === false ? (
              <Button onClick={this.handleBtnClick} />
            ) : null}
          </div>
        ) : null}

        {loader && (
          <Loader type="ThreeDots" color="#FF0000" height={100} width={100} />
        )}

        {status === 'rejected' && toast.error('Some proplems with server')}

        {openModal && <Modal openModal={this.showModal} modalImg={modalImg} />}

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
