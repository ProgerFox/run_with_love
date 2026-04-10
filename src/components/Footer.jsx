export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
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
                className="lucide lucide-heart w-6 h-6 text-red-500 fill-red-500"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
              <span className="tracking-tight">Run With Love</span>
            </div>
            <p className="text-gray-400 text-sm">
              Бежим со смыслом, меняем жизни вместе.
            </p>
          </div>
          <div>
            <h5 className="mb-4">Навигация</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#races" className="hover:text-white transition-colors">
                  Забеги
                </a>
              </li>
              <li>
                <a href="#charity" className="hover:text-white transition-colors">
                  Кому мы помогаем
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Фото / Видео
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-white transition-colors">
                  Новости
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4">Информация</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-white transition-colors">
                  Партнёры
                </a>
              </li>
              <li>
                <a href="#contacts" className="hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Вопросы и ответы
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="mb-4">Документы</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Условия использования
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Правила участия
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>
            © 2026 Run With Love. Все права защищены. Создано с любовью для
            сообщества.
          </p>
        </div>
      </div>
    </footer>
  );
};
