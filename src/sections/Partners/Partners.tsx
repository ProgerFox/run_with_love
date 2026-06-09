import { partnersData } from "../../data/partners";
import { PartnerCard } from "./PartnerCard";

export const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-8">Наши партнёры</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Мы сотрудничаем с брендами и организациями, которые разделяют наши
          ценности сообщества, здоровья и социального влияния.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {partnersData.map((item) => (
            <PartnerCard key={item.name} {...item} />
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
