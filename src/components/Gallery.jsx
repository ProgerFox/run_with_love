import { galleryData } from "../data/gallery.js";

export const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-16">Смотрите моменты</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {galleryData.map((item) => (
            <div
              key={item.alt}
              className="aspect-square overflow-hidden rounded-2xl"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors">
            Все фото и видео
          </button>
        </div>
      </div>
    </section>
  );
};
