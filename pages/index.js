import React from 'react';
import Layout from '../components/Layout.js';
import Main from '../components/Main.js';

const KEY = process.env.UNSPLASH_KEY;
const PER_PAGE = 30;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      query: '',
      pageNum: 1,
      hasMore: true,
      isLoading: true,
      isFetching: false,
    };
    this.searchPhotos = this.searchPhotos.bind(this);
    this.fetchMore = this.fetchMore.bind(this);
    this.resetPhotos = this.resetPhotos.bind(this);
  }

  async getPhotos(pageNum = 1, append = false) {
    const res = await fetch(
      `https://api.unsplash.com/photos/?client_id=${KEY}&per_page=${PER_PAGE}&page=${pageNum}`
    );
    const data = await res.json();
    this.setState(prev => ({
      images: append ? [...prev.images, ...data] : data,
      pageNum,
      hasMore: data.length === PER_PAGE,
      isLoading: false,
      isFetching: false,
    }));
  }

  async searchPhotos(query, pageNum = 1, append = false) {
    const res = await fetch(
      `https://api.unsplash.com/search/photos/?client_id=${KEY}&query=${query}&page=${pageNum}&per_page=${PER_PAGE}`
    );
    const data = await res.json();
    const results = data.results || [];
    sessionStorage.setItem('photos-query', results.length ? query : '');
    this.setState(prev => ({
      images: append ? [...prev.images, ...results] : results,
      query: results.length ? query : '',
      pageNum: results.length ? pageNum : 1,
      hasMore: results.length === PER_PAGE,
      isLoading: false,
      isFetching: false,
    }));
  }

  async fetchMore() {
    if (this.state.isFetching || !this.state.hasMore) return;
    this.setState({ isFetching: true });
    const nextPage = this.state.pageNum + 1;
    if (this.state.query) {
      await this.searchPhotos(this.state.query, nextPage, true);
    } else {
      await this.getPhotos(nextPage, true);
    }
  }

  async resetPhotos() {
    sessionStorage.removeItem('photos-query');
    this.setState({ query: '', pageNum: 1, images: [], hasMore: true, isLoading: true });
    await this.getPhotos(1);
  }

  async componentDidMount() {
    const query = sessionStorage.getItem('photos-query');
    if (query) {
      await this.searchPhotos(query);
    } else {
      await this.getPhotos(1);
    }
  }

  render() {
    const { images, hasMore, isLoading } = this.state;
    return (
      <Layout searchPhotos={this.searchPhotos} resetPhotos={this.resetPhotos}>
        {isLoading ? (
          <div className="initial-loader"><div className="spinner" /></div>
        ) : (
          <Main data={images} fetchMore={this.fetchMore} hasMore={hasMore} />
        )}
      </Layout>
    );
  }
}