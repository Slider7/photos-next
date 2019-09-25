import Link from 'next/link';

const Main = props => (
  <div className="photo-list">
    { props.data.length > 0 ? 
        props.data.map(photo => (
          <div key={photo.id} className='photo-cart'>
            <Link href= { {pathname: '/photo', query: { id: photo.id } }} >
              <img src = {photo.urls.small} alt="Unplash Photo"/>
            </Link>
          </div>
        )) : <h3 style={{textAlign: "center", marginTop: "40px"}}>Nothing found</h3>
    }
  </div>
);

export default Main;