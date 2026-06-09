import { navItems } from "../data/navigation";
import type { ScrollToSection } from "../types";

type HeaderProps = {
  scrollTo: ScrollToSection;
};

export const Header = ({ scrollTo }: HeaderProps) => {
  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
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
              className="lucide lucide-heart w-8 h-8 text-red-500 fill-red-500"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
            <span className="text-xl tracking-tight">Run With Love</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                href={item.href}
                className="text-gray-700 hover:text-gray-900 transition-colors"
                key={index}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            className="hidden md:block px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
            onClick={() => scrollTo("races")}
          >
            Выбрать забег
          </button>
          <button className="md:hidden p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
