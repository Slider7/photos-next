import { useEffect, useRef, useState } from 'react';

/**
 * Галерея с бесконечной прокруткой
 */
const Main = ({ data, fetchMore, hasMore }) => {
  const sentinelRef = useRef(null);

  useEffect(() => {
    // Создаем наблюдателя
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      // Если маяк виден и есть что загружать — вызываем функцию загрузки
      if (entry.isIntersecting && hasMore) {
        fetchMore();
      }
    }, { threshold: 0.5 }); // Сработает, когда 50% маяка будет видно

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, [fetchMore, hasMore]);

  return (
    <div className="photo-container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map(photo => (
          <div key={photo.id} className="photo-card">
            <img src={photo.urls.small} alt={photo.alt_description} />
          </div>
        ))}
      </div>

      {/* Тот самый "маяк" в конце списка */}
      <div ref={sentinelRef} className="h-10 w-full flex justify-center items-center">
        {hasMore ? <p>Loading more...</p> : <p>You've reached the end!</p>}
      </div>
    </div>
  );
};

export default Main;
