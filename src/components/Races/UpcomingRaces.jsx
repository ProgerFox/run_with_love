import { RacingCard } from "./RacingCard";

export const UpcomingRaces = () => {
  const example = [
    {
      img_src:
        "https://images.unsplash.com/photo-1685286589029-f9dc127c86dc?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;q=80&amp;w=800",
      img_alt: "Весенний городской забег",
      title: "Весенний городской забег",
      date: "15 мая 2026",
      place: "Москва • Оффлайн",
      distance: "5 км, 10 км, 21 км",
      partner: "Фонд «Надежда для детей»",
    },
    {
      img_src:
        "https://images.unsplash.com/photo-1774050249612-e20ebb602d72?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;q=80&amp;w=800",
      img_alt: "Летний виртуальный забег",
      title: "Летний виртуальный забег",
      date: "20 июня 2026",
      place: "Онлайн • Онлайн",
      distance: "5 км, 10 км",
      partner: "Инициатива «Зелёная планета»",
    },
    {
      img_src:
        "https://images.unsplash.com/photo-1719299246550-fcb1765de878?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;q=80&amp;w=800",
      img_alt: "Осенний марафон",
      title: "Осенний марафон",
      date: "10 сентября 2026",
      place: "Санкт-Петербург • Оффлайн",
      distance: "10 км, 21 км, 42 км",
      partner: "Помощь приютам для животных",
    },
  ];

  return (
    <section id="races" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-16">Предстоящие забеги</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {example.map((data, index) => (
            <RacingCard key={index} {...data} />
          ))}
        </div>
        <div className="text-center">
          <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors">
            Все забеги
          </button>
        </div>
      </div>
    </section>
  );
};
