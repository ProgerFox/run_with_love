import { newsData } from "../data/news.js";

const NewsCard = ({ src, alt, tag, header, date }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm mb-3">
          {tag}
        </span>
        <h3 className="text-xl mb-3">{header}</h3>
        <p className="text-gray-500 text-sm mb-4">{date}</p>
        <button className="text-red-500 hover:text-red-600 flex items-center gap-1">
          Читать далее{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right w-4 h-4"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export const News = () => {
  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-16">Новости сообщества</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {newsData.map((item) => (
            <NewsCard key={item.header} {...item} />
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
            Все новости
          </button>
          <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors">
            Перейти в группу ВКонтакте
          </button>
        </div>
      </div>
    </section>
  );
};
