import Layout from '../components/Layout.js';
import Main from '../components/Main.js';
import Home from './about';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const APIkey = 'add7029af557a934c8737dd2594d2345a4ae37d1bf154e524df5f07d9054daf2';

export default class App extends React.Component {
  constructor() {
    super();
    this.searchPhotos = this.searchPhotos.bind(this);
    this.scrollPhotos = this.scrollPhotos.bind(this);
    this.getPhotos = this.getPhotos.bind(this);

    this.state = {
      images: [],
      query: '',
      pageNum: 1
    }
  }

/*
  static async getInitialProps() {
    const res = await fetch(`https://api.unsplash.com/photos/?client_id=${APIkey}&per_page=30`)
    const images = await res.json()
    return { images }
  }
*/
  async getPhotos (pageNum = 1) {
    fetch(`https://api.unsplash.com/photos/?client_id=${APIkey}&per_page=30&page=${pageNum}`)
      .then(res => res.json())
      .then(jsonData => {
        this.setState({ 
          images : jsonData,
          pageNum
        });
      })
      .catch(error => console.error('Ошибка при запросе данных: ', error));      
  }

  async searchPhotos (query, pageNum = 1) {
    const fetchResult =  await fetch(`https://api.unsplash.com/search/photos/?client_id=${APIkey}&query=${query}&page=${pageNum}&per_page=30`)
    const images = await fetchResult.json();
    if (images.count === 0) {
      alert('NO photos');
    } else {
      sessionStorage.setItem('photos-query', query);
      sessionStorage.setItem('photos-pageNum', pageNum);
      this.setState({ 
        images: images.results,
        query,
        pageNum
      })
    }
  }
  
  async scrollPhotos (evt) {
    let pageNum = this.state.pageNum;
    if (evt.target.id === 'prev30' && pageNum > 1) pageNum -= 1;
    if (evt.target.id === 'next30') pageNum += 1;
    if (this.state.query) {
      await this.searchPhotos(this.state.query, pageNum)
    } else {
      await this.getPhotos(pageNum);
    }
    
  }
    
  async componentDidMount() {
    const query = sessionStorage.getItem('photos-query');
    const pageNum = sessionStorage.getItem('photos-pageNum');
    if (query && pageNum) {
      await this.searchPhotos(query, pageNum);
    } else {
      await this.getPhotos(1);
    }
  }

  render() {
    console.log('render', this.state);
    return (
      <Layout searchPhotos = {this.searchPhotos} scrollPhotos = {this.scrollPhotos}>
        <Main data = {this.state.images} apiKey = {APIkey}/>
      </Layout>
    )
  }
}