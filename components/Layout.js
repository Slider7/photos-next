import Header from './Header';
import Search from './Search';

import './main.css';

const nextStyle = {
  textAlign: 'center',
  marginTop: 10
}

const Layout = props => (
  <div>
      <Header>
        <Search searchPhotos={props.searchPhotos} />
        <div style={nextStyle}>
          <button id='prev30' onClick = {(e) => {props.scrollPhotos(e)}}>Prev 30</button>
          <button id='reset-btn' onClick = {props.resetPhotos}>Reset search</button>
          <button id='next30' onClick = {(e) => {props.scrollPhotos(e)}}>Next 30</button>
        </div>
      </Header>
    {props.children}
  </div>
);

export default Layout;