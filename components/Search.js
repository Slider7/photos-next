const Search = (props) => {
  const keyPressHandle = e => {
    if (e.key === "Enter"){
      props.searchPhotos(e.target.value); 
    }
  }

  const handleSearch = e => {
    e.preventDefault();
    const input = document.querySelector('#input-search');
    props.searchPhotos(input.value);
  };
  
  return (
    <div>
      <form className='search-form'>
        <div className = 'search'>
          <input 
            onKeyPress={keyPressHandle} 
            type='text' 
            id='input-search' 
            placeholder = 'Search free high-resolution photos' 
            required />
          <button onClick={handleSearch} id='search-btn'><img src="https://img.icons8.com/ios/50/000000/search--v1.png" /> </button>
        </div>
      </form>
      
      <style jsx>{`
          #input-search {
            width: calc(100% - 30px);
            height: 30px;
            font-size: 14pt;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            border: none;
          }
          .search{
            display: flex;
            flex-direction: row;
            justify-content: center;
            border: 2px solid dimgrey;
            border-radius: 10px;
            width: 70%;
            margin: 0 auto;
            padding: 2px;
          }
          #search-btn>img{
            height: 28px;
          }
          #search-btn{
            padding: 0;
            margin: 0;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            background: none;
            border: none;
          }
        `}
      </style>
    </div>
  );
}

export default Search;