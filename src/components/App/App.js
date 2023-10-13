import { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import { Searchbar } from 'components/Searchbar';
import toast from 'react-hot-toast';
import { ImageGallery } from 'components/ImageGallery';
import { Loader } from 'components/Loader';
import { Button } from 'components/Button';
import { fetchImages } from 'helpers/api';
import { Container, Error } from './App.styled';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    loading: false,
    error: false,
    showLoadBtn: false
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state

    if (prevState.searchQuery !== searchQuery || prevState.page !== page ) {
      this.setState({ error: false, loading: true });

      try {
        const foundImages = await fetchImages(searchQuery, page);

        this.setState(prevState => ({
          images: [...prevState.images, ...foundImages.hits],
          showLoadBtn: true,
        }));

        if (foundImages.hits.length < 12) {
          this.setState({ showLoadBtn: false });
        }
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
      
    }
  }

  handleSubmit = ({ searchQuery }, { resetForm }) => {
    if (searchQuery.trim() === '') {
      return toast.error('Please insert someting to search')
    }

    this.setState({ searchQuery, page: 1, images: [], showLoadBtn: false });

    resetForm();
  };

  handleButtonClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }))
  }

  render() {
    const { loading, error, images, showLoadBtn } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        {loading && <Loader />}
        {error && <Error>Oh nooo, something went wront, please reload this page!</Error>}
        {images.length > 0 && (
          <ImageGallery images={images} />
        )}
        {showLoadBtn  && (
          <Button onClick={this.handleButtonClick} />
        )}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#FF0000',
              color: '#fff',
            },
          }}
        />
      </Container>
    );
  };
};
