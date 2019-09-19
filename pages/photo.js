import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout';

const APIkey = 'add7029af557a934c8737dd2594d2345a4ae37d1bf154e524df5f07d9054daf2';

export default class PhotoPage extends React.Component {
  state = {
    photo: null
  }

  static async getInitialProps(query) {
    const { id } = query.query;
    const res = await fetch(`https://api.unsplash.com/photos/${id}/?client_id=${APIkey}`)
    const photo = await res.json()
    return { photo }
  }

  componentWillMount() {
    this.setState({
      photo: this.props.photo
    })
  }

  render() {
    const img = this.state.photo;
    return (
      <div>
        <div className="container">
          <div className="photo-header">
            <div className="author">
              <img className="author-img" src={img.user.profile_image.medium} />
              <p>Author: {img.user.name}</p>
              <p><a href={img.user.links.html}>@{img.user.instagram_username}</a></p>
            </div>
            <h3>{img.description || ''}</h3>
            <a href={img.links.download} className='link-button' target='_blank'>Download Page</a>
          </div>
          <p>Likes: {img.likes}</p>
          <div className="display_image">
            <img src={img.urls.regular} alt='' />
          </div>
        </div>
        <style>{`
              .display_image{
                height: calc(100vh - 100px);
              }
              .display_image img {
                height: 100%; 
                display: block
              }
              .container {
                margin: 20px;
                border-radius: 10px;
                min-width: 320px;
                align-content: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                background: lavender;
                color: #AD0044;
                overflow: hidden;
                box-sizing: border-box;
                box-shadow: 2px 2px 5px 2px dimgrey;
                padding-bottom: 10px;
              }
              .container > p{
                margin: 4px auto 10px auto;
                color: #333333;
              }
              .photo-header{
                width: 90%;
                margin: 10px auto;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
              }
              .photo-header p{
                margin: 0 auto;
              }
              .author{
                font-size: 1.25em;
                min-width: 320px;
              }
              .link-button{
                font-size: 1.1rem;
                color: #333333;
                text-decoration: none;
                min-width: 160px;
                height: 42px;
                border-radius: 8px;
                padding: 10px 20px;
                border: 1px solid grey;
                background: lightgrey;
                text-align: center;
                box-sizing: border-box;
              }
              .author-img{
                float: left;
                border-radius: 50%;
                margin: 10px;
              }
          `}
        </style>
      </div>
    )
  }
}