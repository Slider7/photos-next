import Link from 'next/link';

const Header = ({ children, resetPhotos }) => (
  <header className="header">
    <span className="header-title">Unsplash Photos</span>
    <nav className="header-nav">
      <Link href="/"><a onClick={resetPhotos}>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
    </nav>
    {children}
  </header>
);

export default Header;