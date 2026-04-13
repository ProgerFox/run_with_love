const FAQDialog = ({ question, answer }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      <details className="group">
        <summary className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors cursor-pointer list-none">
          <span className="pr-4">{question}</span>
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
        <div className="px-6 pb-5 text-gray-600 mt-2">{answer}</div>
      </details>
    </div>
  );
};

export const FAQ = () => {
  const data = [
    {
      question: "Могу ли я участвовать, если никогда раньше не бегал забеги?",
      answer:
        "Конечно! Многие наши забеги подходят для новичков. Рекомендуем начать с дистанции 5 км и выбирать забеги с пометкой «Для новичков». Наше сообщество открыто и поддерживает участников с любым уровнем подготовки.",
    },
    {
      question: "Как выбрать подходящую дистанцию?",
      answer:
        "Если вы новичок в беге, начните с 5 км. Если можете комфортно бегать 30 минут, попробуйте 10 км. Для полумарафона (21 км) и марафона (42 км) рекомендуем иметь стабильную тренировочную базу минимум 3-6 месяцев.",
    },
    {
      question: "Что входит в регистрацию?",
      answer:
        "Регистрация включает допуск к забегу, стартовый номер участника, чип хронометража (для оффлайн-забегов), медаль финишёра, официальные фотографии забега и вклад в поддержку нашего партнёра. Некоторые забеги также включают футболку участника и угощения после финиша.",
    },
    {
      question: "Как работает благотворительная поддержка?",
      answer:
        "Часть каждого регистрационного взноса идёт напрямую нашим благотворительным партнёрам. Вы можете точно узнать, какую организацию поддерживает ваш забег, ещё до регистрации. Мы публикуем отчёты о том, как используются средства.",
    },
    {
      question: "Что, если я не смогу финишировать?",
      answer:
        "Никакого давления! Мы поощряем всех двигаться в своём темпе. Ходьба абсолютно допустима. Для виртуальных забегов вы можете пройти дистанцию в любое удобное время в течение периода забега.",
    },
  ];
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-4">Впервые бежите забег?</h2>
        <p className="text-center text-gray-600 mb-16">
          Мы поможем вам разобраться. Вот ответы на самые частые вопросы.
        </p>
        <div className="space-y-4 mb-12">
          {data.map((item, index) => (
            <FAQDialog key={index} {...item} />
          ))}
        </div>
        <div className="text-center">
          <button className="px-8 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors">
            Выберите свой первый забег
          </button>
        </div>
      </div>
    </section>
  );
};
