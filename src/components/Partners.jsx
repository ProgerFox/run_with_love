const PartnerCard = ({ name }) => {
  return (
    <div className="bg-white rounded-2xl p-8 flex items-center justify-center border border-gray-200 hover:shadow-md transition-shadow">
      <div className="text-gray-400 text-center">
        <div className="w-24 h-24 bg-gray-100 rounded-lg mx-auto mb-2"></div>
        <span className="text-sm">{name}</span>
      </div>
    </div>
  );
};

export const Partners = () => {
  const data = [
    { name: "Партнёр 1" },
    { name: "Партнёр 2" },
    { name: "Партнёр 3" },
    { name: "Партнёр 4" },
    { name: "Партнёр 5" },
    { name: "Партнёр 6" },
    { name: "Партнёр 7" },
    { name: "Партнёр 8" },
  ];

  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-8">Наши партнёры</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Мы сотрудничаем с брендами и организациями, которые разделяют наши
          ценности сообщества, здоровья и социального влияния.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {data.map((item, index) => (
            <PartnerCard key={index} {...item} />
          ))}
        </div>
        <div className="text-center">
          <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors">
            Стать партнёром
          </button>
        </div>
      </div>
    </section>
  );
};
