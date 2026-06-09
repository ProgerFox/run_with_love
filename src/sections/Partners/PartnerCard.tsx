import type { Partner } from "../../types";

export const PartnerCard = ({ name }: Partner) => {
  return (
    <div className="bg-white rounded-2xl p-8 flex items-center justify-center border border-gray-200 hover:shadow-md transition-shadow">
      <div className="text-gray-400 text-center">
        <div className="w-24 h-24 bg-gray-100 rounded-lg mx-auto mb-2"></div>
        <span className="text-sm">{name}</span>
      </div>
    </div>
  );
};
