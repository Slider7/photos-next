import { useEffect, useRef } from 'react';
import Link from 'next/link';

const Main = ({ data, fetchMore, hasMore }) => {
  const sentinelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) fetchMore(); },
      { rootMargin: '200px' }
    );
    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [fetchMore]);

  return (
    <div>
      <div className="photo-grid">
        {data.map(photo => (
          <Link key={photo.id} href={`/photo?id=${photo.id}`}>
            <a className="photo-card">
              <img
                src={photo.urls.small}
                alt={photo.alt_description || ''}
                loading="lazy"
              />
              <div className="photo-overlay">
                <span className="photo-author">{photo.user.name}</span>
              </div>
            </a>
          </Link>
        ))}
      </div>

      <div ref={sentinelRef} className="sentinel">
        {hasMore ? <div className="spinner" /> : "You've seen everything."}
      </div>
    </div>
  );
};

export default Main;