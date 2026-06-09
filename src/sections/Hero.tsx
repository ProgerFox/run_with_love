import type { ScrollToSection } from "../types";

type HeroProps = {
  scrollTo: ScrollToSection;
};

export const Hero = ({ scrollTo }: HeroProps) => {
  return (
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
          <button
            className="px-8 py-4 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors text-lg"
            onClick={() => scrollTo("races")}
          >
            Выбрать забег
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-full hover:bg-white/20 transition-colors text-lg">
            Кому мы помогаем
          </button>
        </div>
      </div>
    </section>
  );
};
