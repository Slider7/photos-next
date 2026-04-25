import React from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import '../components/main.css';

export default class PhotoPage extends React.Component {
  static async getInitialProps({ query }) {
    const res = await fetch(
      `https://api.unsplash.com/photos/${query.id}/?client_id=${process.env.UNSPLASH_KEY}`
    );
    const photo = await res.json();
    return { photo };
  }

  render() {
    const img = this.props.photo;
    if (!img || img.errors) {
      return (
        <div className="detail-page">
          <p style={{ color: 'var(--text-muted)' }}>Photo not found.</p>
        </div>
      );
    }

    return (
      <div className="detail-page">
        <div className="detail-card">
          <div className="detail-meta">
            <img
              className="detail-avatar"
              src={img.user.profile_image.medium}
              alt={img.user.name}
            />
            <div>
              <div className="detail-author-name">{img.user.name}</div>
              <a
                className="detail-author-handle"
                href={img.user.links.html}
                target="_blank"
                rel="noopener noreferrer"
              >
                @{img.user.username}
              </a>
            </div>
            <div className="detail-stats">♥ {img.likes.toLocaleString()}</div>
          </div>

          {img.description && (
            <div className="detail-description">{img.description}</div>
          )}

          <div className="detail-image-wrap">
            <img src={img.urls.regular} alt={img.alt_description || ''} />
          </div>

          <div className="detail-actions">
            <a
              className="btn btn-primary"
              href={img.links.download + '?force=true'}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
            <Link href="/"><a className="btn btn-secondary">← Back</a></Link>
          </div>
        </div>
      </div>
    );
  }
}