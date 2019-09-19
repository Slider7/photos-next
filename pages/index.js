import Layout from '../components/Layout.js';
import Main from '../components/Main.js';
import Home from './about';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const APIkey = 'add7029af557a934c8737dd2594d2345a4ae37d1bf154e524df5f07d9054daf2';

export default class App extends React.Component {
  static async getInitialProps() {
    const res = await fetch(`https://api.unsplash.com/photos/?client_id=${APIkey}&per_page=30`)
    const images = await res.json()
    return { images }
  }

  static async searchPhotos(query) {
    const res = await fetch(`https://api.unsplash.com/photos/?client_id=${APIkey}&query=${query}&per_page=30`);
    const images = await res.json();
    return { images };
  }
  
  
  componentWillMount() {
    this.setState({
      images: this.props.images
    })
  }

  render() {
    return (
      <Layout>
        <Main data = {this.state.images} apiKey = {APIkey}/>
      </Layout>
    )
  }
}