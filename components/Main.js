/**
 * Сетка фотографий с эффектом наведения
 */
const Main = ({ data }) => {
  if (data.length === 0) {
    return <h3 className="text-center mt-20 text-gray-500">Nothing found</h3>;
  }

  return (
    <main className="pt-44 pb-10 px-4 max-w-[1600px] mx-auto">
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {data.map(photo => (
          <div key={photo.id} className="break-inside-avoid overflow-hidden rounded-lg group relative">
            <Link href={{ pathname: '/photo', query: { id: photo.id } }}>
              <img 
                src={photo.urls.small} 
                alt="Unsplash" 
                className="w-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer"
              />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;
