import Link from 'next/link';

const Main = props => (
  <div className="photo-list">
    {props.data.map(photo => (
        <div key={photo.id} className='photo-cart'>
          <Link href= { {pathname: '/photo', query: { id: photo.id } }}>
            <img src = {photo.urls.small} alt=""/>
          </Link>
        </div>
      ))}
  </div>
);

export default Main;