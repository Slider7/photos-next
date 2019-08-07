import Link from 'next/link';

const Main = props => (
  <div className="photo-list">
    {props.data.map(photo => (
        <div key={photo.id} className='photo-cart'>
          <Link href= {`/photo` }>
            <img src = {photo.urls.small}/>
          </Link>
        </div>
      ))}
  </div>
);

export default Main;