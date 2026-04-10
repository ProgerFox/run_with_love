export const Content = () => {
  return (
    <>
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1685286589029-f9dc127c86dc?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;q=80&amp;w=1920"
            alt="Runners community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">
            Бежим со смыслом.
            <br />
            Меняем жизни вместе.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Присоединяйтесь к сообществу бегунов, для которых важен каждый
            километр. Выберите забег, пересеките финиш и поддержите
            благотворительные организации.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors text-lg">
              Выбрать забег
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-full hover:bg-white/20 transition-colors text-lg">
              Кому мы помогаем
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-16">Как это работает</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
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
                  className="lucide lucide-calendar w-8 h-8 text-red-500"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
              </div>
              <div className="text-6xl mb-4 text-red-500">1</div>
              <h3 className="text-2xl mb-3">Выберите забег</h3>
              <p className="text-gray-600">
                Посмотрите наши предстоящие забеги и выберите тот, который
                подходит вашим целям и расписанию
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
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
                  className="lucide lucide-award w-8 h-8 text-red-500"
                >
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
              </div>
              <div className="text-6xl mb-4 text-red-500">2</div>
              <h3 className="text-2xl mb-3">Зарегистрируйтесь</h3>
              <p className="text-gray-600">
                Быстрая и простая регистрация. Никаких скрытых платежей, только
                ваш вклад в помощь
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
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
                  className="lucide lucide-heart w-8 h-8 text-red-500"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <div className="text-6xl mb-4 text-red-500">3</div>
              <h3 className="text-2xl mb-3">Бегите и помогайте</h3>
              <p className="text-gray-600">
                Пересеките финиш и знайте, что каждый ваш шаг изменил чью-то
                жизнь к лучшему
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="races" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-16">Предстоящие забеги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1685286589029-f9dc127c86dc?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;q=80&amp;w=800"
                  alt="Весенний городской забег"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm mb-3">
                  Для новичков
                </span>
                <h3 className="text-2xl mb-3">Весенний городской забег</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
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
                      className="lucide lucide-calendar w-4 h-4"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    <span>15 мая 2026</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
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
                      className="lucide lucide-map-pin w-4 h-4"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>Москва • Оффлайн</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
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
                      className="lucide lucide-trophy w-4 h-4"
                    >
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                      <path d="M4 22h16"></path>
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                    </svg>
                    <span>5 км, 10 км, 21 км</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
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
                      className="lucide lucide-heart w-4 h-4 text-red-500 fill-red-500"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                    <span className="text-sm">Фонд «Надежда для детей»</span>
                  </div>
                </div>
                <button className="w-full px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
                  Подробнее и регистрация
                </button>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1774050249612-e20ebb602d72?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;q=80&amp;w=800"
                  alt="Летний виртуальный забег"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm mb-3">
                  Для новичков
                </span>
                <h3 className="text-2xl mb-3">Летний виртуальный забег</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
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
                      className="lucide lucide-calendar w-4 h-4"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    <span>20 июня 2026</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
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
                      className="lucide lucide-map-pin w-4 h-4"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>Онлайн • Онлайн</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
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
                      className="lucide lucide-trophy w-4 h-4"
                    >
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                      <path d="M4 22h16"></path>
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                    </svg>
                    <span>5 км, 10 км</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
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
                      className="lucide lucide-heart w-4 h-4 text-red-500 fill-red-500"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                    <span className="text-sm">
                      Инициатива «Зелёная планета»
                    </span>
                  </div>
                </div>
                <button className="w-full px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
                  Подробнее и регистрация
                </button>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1719299246550-fcb1765de878?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;q=80&amp;w=800"
                  alt="Осенний марафон"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-3">Осенний марафон</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
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
                      className="lucide lucide-calendar w-4 h-4"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    <span>10 сентября 2026</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
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
                      className="lucide lucide-map-pin w-4 h-4"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>Санкт-Петербург • Оффлайн</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
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
                      className="lucide lucide-trophy w-4 h-4"
                    >
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                      <path d="M4 22h16"></path>
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                    </svg>
                    <span>10 км, 21 км, 42 км</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
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
                      className="lucide lucide-heart w-4 h-4 text-red-500 fill-red-500"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                    <span className="text-sm">Помощь приютам для животных</span>
                  </div>
                </div>
                <button className="w-full px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
                  Подробнее и регистрация
                </button>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors">
              Все забеги
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-16">Почему Run With Love</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
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
                className="lucide lucide-smile w-12 h-12 text-red-500 mb-4"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" x2="9.01" y1="9" y2="9"></line>
                <line x1="15" x2="15.01" y1="9" y2="9"></line>
              </svg>
              <h3 className="text-xl mb-3">Дружелюбная атмосфера</h3>
              <p className="text-gray-600">
                Никаких оценок, только поддержка. Каждый бежит в своём темпе в
                доброжелательной обстановке.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
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
                className="lucide lucide-heart w-12 h-12 text-red-500 mb-4"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
              <h3 className="text-xl mb-3">Участие со смыслом</h3>
              <p className="text-gray-600">
                Каждый километр напрямую поддерживает реальные благотворительные
                проекты и приносит реальную пользу.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
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
                className="lucide lucide-target w-12 h-12 text-red-500 mb-4"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
              <h3 className="text-xl mb-3">Для новичков</h3>
              <p className="text-gray-600">
                Подходит всем — от тех, кто впервые выходит на старт, до опытных
                марафонцев.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
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
                className="lucide lucide-users w-12 h-12 text-red-500 mb-4"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <h3 className="text-xl mb-3">Сообщество</h3>
              <p className="text-gray-600">
                Станьте частью движения единомышленников, которые верят в бег со
                смыслом.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="charity" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-16">Кому мы помогаем</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
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
              </div>
              <h3 className="text-2xl mb-4">Фонд «Надежда для детей»</h3>
              <p className="text-gray-600 mb-4">
                Поддержка программ здравоохранения и образования для детей по
                всей стране. Ваше участие помогает обеспечить медицинскую помощь
                и образовательные ресурсы детям, которым это нужно.
              </p>
              <div className="text-red-500">← Партнёр весеннего забега</div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
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
              </div>
              <h3 className="text-2xl mb-4">Инициатива «Зелёная планета»</h3>
              <p className="text-gray-600 mb-4">
                Проекты по защите окружающей среды и лесовосстановлению. Каждый
                виртуальный забег высаживает деревья и поддерживает инициативы
                устойчивого развития.
              </p>
              <div className="text-green-600">← Партнёр летнего забега</div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
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
              </div>
              <h3 className="text-2xl mb-4">Помощь приютам для животных</h3>
              <p className="text-gray-600 mb-4">
                Уход, приют и услуги по устройству брошенных животных. Средства
                помогают с ветеринарной помощью, питанием и поиском любящих
                домов.
              </p>
              <div className="text-blue-600">← Партнёр осеннего марафона</div>
            </div>
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
              <div className="text-6xl mb-3">18,5 млн ₽</div>
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

      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-16">Смотрите моменты</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            <div className="aspect-square overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1774050249612-e20ebb602d72?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;q=80&amp;w=600"
                alt="Момент забега 1"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1769867628239-32f07b0679ec?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;q=80&amp;w=600"
                alt="Момент забега 2"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1766066015219-b10a97dbb781?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;q=80&amp;w=600"
                alt="Момент забега 3"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1774557937760-e07a8e01240c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;q=80&amp;w=600"
                alt="Момент забега 4"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1774050020965-3948c2b88e44?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;q=80&amp;w=600"
                alt="Момент забега 5"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1771402900132-9f93e36ec0ef?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;q=80&amp;w=600"
                alt="Момент забега 6"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="text-center">
            <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors">
              Все фото и видео
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-4">Впервые бежите забег?</h2>
          <p className="text-center text-gray-600 mb-16">
            Мы поможем вам разобраться. Вот ответы на самые частые вопросы.
          </p>
          <div className="space-y-4 mb-12">
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <details className="group">
                <summary className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors cursor-pointer list-none">
                  <span className="pr-4">
                    Могу ли я участвовать, если никогда раньше не бегал забеги?
                  </span>
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
                    className="lucide lucide-chevron-down w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-gray-600 mt-2">
                  Конечно! Многие наши забеги подходят для новичков. Рекомендуем
                  начать с дистанции 5 км и выбирать забеги с пометкой «Для
                  новичков». Наше сообщество открыто и поддерживает участников с
                  любым уровнем подготовки.
                </div>
              </details>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <details className="group">
                <summary className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors cursor-pointer list-none">
                  <span className="pr-4">Как выбрать подходящую дистанцию?</span>
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
                    className="lucide lucide-chevron-down w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-gray-600 mt-2">
                  Если вы новичок в беге, начните с 5 км. Если можете комфортно
                  бегать 30 минут, попробуйте 10 км. Для полумарафона (21 км) и
                  марафона (42 км) рекомендуем иметь стабильную тренировочную
                  базу минимум 3-6 месяцев.
                </div>
              </details>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <details className="group">
                <summary className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors cursor-pointer list-none">
                  <span className="pr-4">Что входит в регистрацию?</span>
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
                    className="lucide lucide-chevron-down w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-gray-600 mt-2">
                  Регистрация включает допуск к забегу, стартовый номер
                  участника, чип хронометража (для оффлайн-забегов), медаль
                  финишёра, официальные фотографии забега и вклад в поддержку
                  нашего партнёра. Некоторые забеги также включают футболку
                  участника и угощения после финиша.
                </div>
              </details>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <details className="group">
                <summary className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors cursor-pointer list-none">
                  <span className="pr-4">
                    Как работает благотворительная поддержка?
                  </span>
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
                    className="lucide lucide-chevron-down w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-gray-600 mt-2">
                  Часть каждого регистрационного взноса идёт напрямую нашим
                  благотворительным партнёрам. Вы можете точно узнать, какую
                  организацию поддерживает ваш забег, ещё до регистрации. Мы
                  публикуем отчёты о том, как используются средства.
                </div>
              </details>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <details className="group">
                <summary className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors cursor-pointer list-none">
                  <span className="pr-4">Что, если я не смогу финишировать?</span>
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
                    className="lucide lucide-chevron-down w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-gray-600 mt-2">
                  Никакого давления! Мы поощряем всех двигаться в своём темпе.
                  Ходьба абсолютно допустима. Для виртуальных забегов вы можете
                  пройти дистанцию в любое удобное время в течение периода
                  забега.
                </div>
              </details>
            </div>
          </div>
          <div className="text-center">
            <button className="px-8 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors">
              Выберите свой первый забег
            </button>
          </div>
        </div>
      </section>

      <section id="news" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-16">Новости сообщества</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1774557937760-e07a8e01240c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;q=80&amp;w=800"
                  alt="Весенний забег собрал 2,5 млн рублей на детское здравоохранение"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm mb-3">
                  Влияние
                </span>
                <h3 className="text-xl mb-3">
                  Весенний забег собрал 2,5 млн рублей на детское
                  здравоохранение
                </h3>
                <p className="text-gray-500 text-sm mb-4">28 марта 2026</p>
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
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1766066015219-b10a97dbb781?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;q=80&amp;w=800"
                  alt="Запущена новая программа тренировок для новичков"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm mb-3">
                  Сообщество
                </span>
                <h3 className="text-xl mb-3">
                  Запущена новая программа тренировок для новичков
                </h3>
                <p className="text-gray-500 text-sm mb-4">25 марта 2026</p>
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
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1769867627584-4629a704a517?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;q=80&amp;w=800"
                  alt="Знакомьтесь с нашим новым партнёром: Инициатива «Зелёная планета»"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm mb-3">
                  Благотворительность
                </span>
                <h3 className="text-xl mb-3">
                  Знакомьтесь с нашим новым партнёром: Инициатива «Зелёная
                  планета»
                </h3>
                <p className="text-gray-500 text-sm mb-4">20 марта 2026</p>
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

      <section id="partners" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-8">Наши партнёры</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Мы сотрудничаем с брендами и организациями, которые разделяют наши
            ценности сообщества, здоровья и социального влияния.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 flex items-center justify-center border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-gray-400 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-lg mx-auto mb-2"></div>
                <span className="text-sm">Партнёр 1</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 flex items-center justify-center border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-gray-400 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-lg mx-auto mb-2"></div>
                <span className="text-sm">Партнёр 2</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 flex items-center justify-center border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-gray-400 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-lg mx-auto mb-2"></div>
                <span className="text-sm">Партнёр 3</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 flex items-center justify-center border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-gray-400 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-lg mx-auto mb-2"></div>
                <span className="text-sm">Партнёр 4</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 flex items-center justify-center border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-gray-400 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-lg mx-auto mb-2"></div>
                <span className="text-sm">Партнёр 5</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 flex items-center justify-center border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-gray-400 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-lg mx-auto mb-2"></div>
                <span className="text-sm">Партнёр 6</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 flex items-center justify-center border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-gray-400 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-lg mx-auto mb-2"></div>
                <span className="text-sm">Партнёр 7</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 flex items-center justify-center border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-gray-400 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-lg mx-auto mb-2"></div>
                <span className="text-sm">Партнёр 8</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors">
              Стать партнёром
            </button>
          </div>
        </div>
      </section>

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
                  <p>Email: hello@runwithlove.org</p>
                  <p>Телефон: +7 (495) 123-45-67</p>
                  <p>Адрес: Москва, Россия</p>
                </div>
              </div>
              <div>
                <h4 className="mb-4">Мы в соцсетях</h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    VK
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    TG
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    IG
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
