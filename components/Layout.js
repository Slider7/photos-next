import Header from './Header';
import Search from './Search';
import './main.css';

const Layout = ({ children, searchPhotos, resetPhotos }) => (
  <div className="layout">
    <Header resetPhotos={resetPhotos}>
      <Search searchPhotos={searchPhotos} />
    </Header>
    <div className="content">
      {children}
    </div>
  </div>
);

export default Layout;