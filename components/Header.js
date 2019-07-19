import Link from 'next/link';
import { Z_FIXED } from 'zlib';

const headerStyle = {
  position: 'fixed',
  margin: 0,
  padding: '15px 25px',
  top: 0,
  width: "100vw",
  background: 'white',
  zIndex: 5,
  fontFamily: 'Arial, Tahoma'
};

const linkStyle = {
  marginRight: 15
};
const h2Style = {
  margin: 0,
  textAlign: 'center'
};

const Header = (props) => (
  <div style={headerStyle}>
  <h2 style={h2Style}>Unsplash photos</h2>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    {props.children}
  </div>
);

export default Header;