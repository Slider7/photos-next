import { useEffect, useRef } from 'react';
import Header from './Header';
import Search from './Search';

// Импорт стилей (или используй Tailwind классы из предыдущего совета)
import './main.css';

/**
 * Основной макет приложения с поддержкой Infinite Scroll
 */
const Layout = ({ children, searchPhotos, scrollPhotos, hasMore }) => {
  const sentinelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Если маяк внизу страницы стал виден — триггерим загрузку
        if (entries[0].isIntersecting && hasMore) {
          // Эмулируем клик "Next", который раньше делался вручную
          scrollPhotos({ target: { id: 'next30' } });
        }
      },
      { threshold: 0.1 }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, [scrollPhotos, hasMore]);

  return (
    <div className="layout-container">
      <Header>
        <Search searchPhotos={searchPhotos} />
        {/* Кнопки удалены для чистоты интерфейса */}
      </Header>

      <main className="content-wrapper">
        {children}
      </main>

      {/* Маяк: когда пользователь доскроллит сюда, загрузятся новые фото */}
      <div 
        ref={sentinelRef} 
        className="sentinel" 
        style={{ height: '50px', textAlign: 'center' }}
      >
        {hasMore ? 'Загрузка новых фото...' : 'Вы посмотрели всё!'}
      </div>
    </div>
  );
};

export default Layout;
