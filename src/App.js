import { Component } from 'react';
import Searchbar from './Searchbar-ui/Searchbar';
import ImageGallery from './ImageGallery-ui/ImageGallery';
import styles from './styles.css';

export default class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    const { searchQuery, page } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery query={searchQuery} initialPage={page} />
      </div>
    );
  }
}
