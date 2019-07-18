import Layout from '../../components/Layout.js'
import fetch from 'isomorphic-unfetch';

const APIkey = 'add7029af557a934c8737dd2594d2345a4ae37d1bf154e524df5f07d9054daf2';

const PhotoPage = props => (
  <Layout>
    <h1>{props.photo.description}</h1>
    <img src={props.photo.urls.small} />
  </Layout>
);

PhotoPage.getInitialProps = async function(context) {
  const {id} = context.query;
  const res = await fetch(`https://api.unsplash.com/photos/?client_id=${APIkey}&id=${id}`)
  const photo = await res.json();

  console.log(`Fetched photo: ${photo.id}`);

  return { photo };
};

export default PhotoPage;