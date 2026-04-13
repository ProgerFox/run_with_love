import { faqData } from "../data/faq.js";

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
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-4">Впервые бежите забег?</h2>
        <p className="text-center text-gray-600 mb-16">
          Мы поможем вам разобраться. Вот ответы на самые частые вопросы.
        </p>
        <div className="space-y-4 mb-12">
          {faqData.map((item) => (
            <FAQDialog key={item.question} {...item} />
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
