import Link from 'next/link';
import '../components/main.css';

export default function About() {
  return (
    <div className="about-page">
      <div className="about-card">
        <div className="about-logo">✦</div>
        <h1 className="about-title">Unsplash Photos</h1>
        <p className="about-sub">Photo browser built on the Unsplash API</p>

        <div className="about-stack">
          <span className="about-tag">Next.js</span>
          <span className="about-tag">React</span>
          <span className="about-tag">Unsplash API</span>
        </div>

        <p className="about-author">Kemalkhan Shlembayev</p>

        <div className="about-links">
          <a href="mailto:kemalsh771@gmail.com" className="about-link">
            kemalsh771@gmail.com
          </a>
          <a
            href="https://unsplash.com/developers"
            target="_blank"
            rel="noopener noreferrer"
            className="about-link"
          >
            Unsplash API ↗
          </a>
        </div>

        <p className="about-footer">Built with Claude Code · 2026</p>

        <Link href="/"><a className="btn btn-secondary" style={{ marginTop: '8px', display: 'inline-flex' }}>← Browse photos</a></Link>
      </div>
    </div>
  );
}