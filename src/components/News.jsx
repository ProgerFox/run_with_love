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
  const data = [
    {
      src: "https://images.unsplash.com/photo-1774557937760-e07a8e01240c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;q=80&amp;w=800",
      alt: "Весенний забег собрал 2,5 млн рублей на детское здравоохранение",
      tag: "Влияние",
      header: "Весенний забег собрал 2,5 млн рублей на детское здравоохранение",
      date: "28 марта 2026",
    },
    {
      src: "https://images.unsplash.com/photo-1766066015219-b10a97dbb781?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;q=80&amp;w=800",
      alt: "Запущена новая программа тренировок для новичков",
      tag: "Сообщество",
      header: "Запущена новая программа тренировок для новичков",
      date: "25 марта 2026",
    },
    {
      src: "https://images.unsplash.com/photo-1769867627584-4629a704a517?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;q=80&amp;w=800",
      alt: "Знакомьтесь с нашим новым партнёром: Инициатива «Зелёная планета»",
      tag: "Благотворительность",
      header:
        "Знакомьтесь с нашим новым партнёром: Инициатива «Зелёная планета»",
      date: "20 марта 2026",
    },
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-16">Новости сообщества</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {data.map((item, index) => (
            <NewsCard key={index} {...item} />
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
