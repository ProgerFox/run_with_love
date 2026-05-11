export const Influence = () => {
  return (
    <section className="py-20 bg-red-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-16">Наше влияние</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-6xl mb-3">127</div>
            <div className="text-xl text-red-100">Проведено забегов</div>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-3">42 500+</div>
            <div className="text-xl text-red-100">Участников</div>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-3">18,5 млн&nbsp;₽</div>
            <div className="text-xl text-red-100">Собрано для помощи</div>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-3">23</div>
            <div className="text-xl text-red-100">Организаций поддержано</div>
          </div>
        </div>
        <div className="text-center">
          <button className="px-8 py-3 bg-white text-red-500 rounded-full hover:bg-gray-100 transition-colors">
            История проекта
          </button>
        </div>
      </div>
    </section>
  );
};
