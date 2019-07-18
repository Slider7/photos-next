import Layout from '../components/Layout.js';
import Home from './about';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const APIkey = 'add7029af557a934c8737dd2594d2345a4ae37d1bf154e524df5f07d9054daf2';

const App = props => (
  <Layout>
    <h2>Hello Next.js</h2>
    <div>
      <ul className="photo-list">
        {props.photos.map(photo => (
          <li key={photo.id}>
            <Link href= {`https://unsplash.com/photos/${photo.id}`}>
              <a>{photo.user.username}</a>
            </Link>
            <img src = {photo.urls.small}/>
          </li>
        ))}
      </ul>
      <style jsx>{`
          .photo-list{
            column-count: 3;
          }
          .photo-list > li{
             display: inline-block;
             margin: 10px;
             text-align: center;
          }
          .photo-list > li >img{
             display: block;
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