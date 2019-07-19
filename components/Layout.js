import Header from './Header';
import Search from './Search';

const nextStyle = {
  textAlign: 'center',
  marginTop: 10
}

const Layout = props => (
  <div>
      <Header>
        <Search />
        <div style={nextStyle}>
          <button>Prev 30</button>
          <button>Next 30</button>
        </div>
      </Header>
    {props.children}
  </div>
);

export default Layout;