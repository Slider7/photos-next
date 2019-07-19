import Layout from '../components/Layout.js';
import Home from './about';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const APIkey = 'add7029af557a934c8737dd2594d2345a4ae37d1bf154e524df5f07d9054daf2';

const App = props => (
  <Layout>
    <div className="photo-list">
      {props.photos.map(photo => (
        <div key={photo.id} className='photo-cart'>
          <Link href= {`https://unsplash.com/photos/${photo.id}`}>
            <a>{photo.user.username}</a>
          </Link>
          <img src = {photo.urls.small}/>
        </div>
      ))}
      <style jsx>{`
          .photo-list{
            margin: 150px auto 0 auto;
            width: calc(100% - 40px);
            height: 250vw;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            align-content: center;
            height: 1810px;
          }

          .photo-cart{
            margin: 0;
            width: 20%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            position: relative;
          }
          .photo-cart a{
            position: absolute;
            top: 8px;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
          }
          .photo-cart > img{
            object-fit: cover;
            height: 300px;
            position: relative;
            z-index: 0;
            transition: .8s opacity;
          }
          .photo-list:hover img{
            opacity: 0.4;
          }
          .photo-list:hover img:hover{
            opacity: 1;
          }
          
          @media screen and (max-width: 499px) {
	          .photo-list { 
              height: 9010px; 
              min-width: 359px;
            }
	          .photo-cart { width: 100%; }
          }
          @media screen and (min-width: 500px) and (max-width: 899px) {
	          .photo-list { height: 4510px; }
            .photo-cart { width: 50%; }
          }
          @media screen and (min-width: 900px) and (max-width: 1500px) {
	          .photo-list { height: 3010px; }
            .photo-cart { width: 33.3%; }
          }
        `}
      </style>
    </div>
  </Layout>
)

App.getInitialProps = async function() {
  const res = await fetch(`https://api.unsplash.com/photos/?client_id=${APIkey}&per_page=30`);
  const data = await res.json();

  console.log(`Data fetched. Count: ${data.length}`);
  return {
    photos: data
  };
};

export default App;