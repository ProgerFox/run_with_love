const CharityCard = ({
  icon_bg,
  icon,
  partner,
  description,
  type_color,
  type,
}) => {
  return (
    <div className="bg-gray-50 p-8 rounded-2xl">
      <div className={icon_bg}>{icon}</div>
      <h3 className="text-2xl mb-4">{partner}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className={type_color}>{type}</div>
    </div>
  );
};

export const Charity = () => {
  const data = [
    {
      icon_bg:
        "w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mb-6",
      icon: (
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
          className="lucide lucide-heart w-10 h-10 text-red-500"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        </svg>
      ),
      partner: "Фонд «Надежда для детей»",
      description:
        "Поддержка программ здравоохранения и образования для детей по всей стране. Ваше участие помогает обеспечить медицинскую помощь и образовательные ресурсы детям, которым это нужно.",
      type_color: "text-red-500",
      type: "← Партнёр весеннего забега",
    },
    {
      icon_bg:
        "w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mb-6",
      icon: (
        <svg
          className="w-10 h-10 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      ),
      partner: "Инициатива «Зелёная планета»",
      description:
        "Проекты по защите окружающей среды и лесовосстановлению. Каждый виртуальный забег высаживает деревья и поддерживает инициативы устойчивого развития.",
      type_color: "text-green-600",
      type: "← Партнёр летнего забега",
    },
    {
      icon_bg:
        "w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-6",
      icon: (
        <svg
          className="w-10 h-10 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
          ></path>
        </svg>
      ),
      partner: "Фонд «Надежда для детей»",
      description:
        "Поддержка программ здравоохранения и образования для детей по всей стране. Ваше участие помогает обеспечить медицинскую помощь и образовательные ресурсы детям, которым это нужно.",
      type_color: "text-blue-600",
      type: "← Партнёр весеннего забега",
    },
  ];

  return (
    <section id="charity" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-16">Кому мы помогаем</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {data.map((item, index) => (
            <CharityCard key={index} {...item} />
          ))}
        </div>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Прозрачная часть каждого регистрационного взноса идёт напрямую нашим
          партнёрам. Мы публикуем подробные отчёты о том, как используются
          средства и какую разницу они делают.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
            Посмотреть отчёты
          </button>
          <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors">
            Кому мы помогаем сейчас
          </button>
        </div>
      </div>
    </section>
  );
};
