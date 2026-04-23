import Link from 'next/link';
import { Z_FIXED } from 'zlib';

/**
 * Обновленный заголовок с использованием Tailwind CSS
 */
const Header = ({ children }) => (
  <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-white/70 border-b border-gray-200 py-4 px-6">
    <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Unsplash Photos</h2>
      <nav className="flex gap-6 text-sm font-medium text-gray-600">
        <Link href="/" className="hover:text-black transition-colors">Home</Link>
        <Link href="/about" className="hover:text-black transition-colors">About</Link>
      </nav>
      {children}
    </div>
  </header>
);

export default Header;
