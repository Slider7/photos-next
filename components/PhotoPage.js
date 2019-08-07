const APIkey = 'add7029af557a934c8737dd2594d2345a4ae37d1bf154e524df5f07d9054daf2';

const PhotoPage = (props) => (
  <div>
    <h2>
      THIS IS PHOTO PAGE
    </h2>
    <p>
      {props.photo}
    </p>
    <style jsx>{`
      div{
        color: blue;   
      }
      `}
    </style>
  </div>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.unsplash.com/photos/${id}/?client_id=${APIkey}`);
  const data = await res.json();

  console.log(`Data fetched. Count: ${data.length}`); //убрать после завершения
  return {
    photo: data
  };
};

export default PhotoPage;