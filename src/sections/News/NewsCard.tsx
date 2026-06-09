import type { NewsItem } from "../../types";

export const NewsCard = ({ src, alt, tag, header, date }: NewsItem) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm mb-3">
          {tag}
        </span>
        <h3 className="text-xl mb-3">{header}</h3>
        <p className="text-gray-500 text-sm mb-4">{date}</p>
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
  );
};
