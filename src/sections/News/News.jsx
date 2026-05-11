import { newsData } from "../../data/news.js";
import { NewsCard } from "./NewsCard.jsx";

export const News = () => {
  // TODO: автоматически парсить новости из vk
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
          <button
            className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors"
            onClick={() => (window.location.href = "https://vk.ru/runwithlove")}
          >
            Перейти в группу ВКонтакте
          </button>
        </div>
      </div>
    </section>
  );
};
