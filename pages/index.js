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
    this.resetPhotos = this.resetPhotos.bind(this);

    this.state = {
      images: [],
      query: '',
      pageNum: 1,
      isLoading: true
    }
  }

  async getPhotos (pageNum = 1) {
    fetch(`https://api.unsplash.com/photos/?client_id=${APIkey}&per_page=30&page=${pageNum}`)
      .then(res => res.json())
      .then(jsonData => {
        this.setState({ 
          images : jsonData,
          pageNum,
          isLoading: false
        });
      })
      .catch(error => console.error('Ошибка при запросе данных: ', error));      
  }

  async searchPhotos (query, pageNum = 1) {
    const fetchResult =  await fetch(`https://api.unsplash.com/search/photos/?client_id=${APIkey}&query=${query}&page=${pageNum}&per_page=30`)
    const images = await fetchResult.json();
    if (images.total === 0) {
      this.setState({ 
        images: [],
        query: '',
        pageNum: 1,
        isLoading: false
      })
    } else {
      sessionStorage.setItem('photos-query', query);
      sessionStorage.setItem('photos-pageNum', pageNum);
      this.setState({ 
        images: images.results,
        query,
        pageNum,
        isLoading: false
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

  async resetPhotos () {
    sessionStorage.setItem('photos-query', '');
    sessionStorage.setItem('photos-pageNum', 0);
    this.setState({
      query: '',
      pageNum: 1
    })
    await this.getPhotos(1);
  }

  render() {
    return (
      <Layout 
        searchPhotos = {this.searchPhotos} 
        scrollPhotos = {this.scrollPhotos} 
        resetPhotos = {this.resetPhotos} >
        {
          this.state.isLoading
						? <h2 style = {{textAlign: "center", marginTop: "50%"}}>Loading...</h2>
						: <Main data = {this.state.images} apiKey = {APIkey}/>
        }
        
      </Layout>
    )
  }
}