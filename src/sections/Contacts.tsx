export const Contacts = () => {
  return (
    <section
      id="contacts"
      className="py-20 bg-gradient-to-br from-red-500 to-red-600 text-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl mb-6">
          Готовы сделать каждый шаг значимым?
        </h2>
        <p className="text-xl mb-12 text-red-100">
          Присоединяйтесь к тысячам бегунов, которые открыли для себя, что
          лучший финиш — тот, который помогает другим.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="px-8 py-4 bg-white text-red-500 rounded-full hover:bg-gray-100 transition-colors text-lg">
            Перейти к регистрации
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full hover:bg-white/20 transition-colors text-lg">
            Связаться с организаторами
          </button>
        </div>
        <div className="border-t border-red-400 pt-12">
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="mb-4">Контактная информация</h4>
              <div className="space-y-2 text-red-100">
                <p>Почта: 89164192119@mail.ru</p>
              </div>
            </div>
            <div>
              <h4 className="mb-4">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <a
                  href="https://vk.ru/runwithlove"
                  target="_blank"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  VK
                </a>
                <a
                  href="https://t.me/run_with_love"
                  target="_blank"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  TG
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
