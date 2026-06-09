import { RacesCard } from "./RacesCard";
import { racesData } from "../../data/races";

export const Races = () => {
  return (
    <section id="races" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-16">Предстоящие забеги</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {racesData.map((race) => (
            <RacesCard key={race.title} {...race} />
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
