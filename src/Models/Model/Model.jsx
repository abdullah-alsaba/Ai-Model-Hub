import "../../index.css";
import { TiStarFullOutline } from "react-icons/ti";


const Model = ({ model }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-[30px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Top Section */}
      <div className="relative bg-[#ECECEF] h-55 flex items-center justify-center">
        {/* Badge */}
        <span
          className={`
    absolute top-5 right-5
    text-white text-[12px]
    font-semibold
    px-5 py-2
    rounded-full
    tracking-wide
    min-w-36
    flex items-center justify-center gap-1.5

    ${
      model.status === "Popular"
        ? "bg-red-600"
        : model.status === "Favourite"
          ? "bg-orange-500"
          : "bg-[#ff9900] text-black"
    }
  `}
        >
          {model.status === "Popular" && <span className="text-sm">🔥</span>}

          {model.status === "Favourite" && <span className="text-sm">🧡</span>}

          {model.status.toLowerCase() === "most wanted" && (
            <TiStarFullOutline className="text-[15px] text-[#e3be39]" />
          )}

          {model.status}
        </span>

        {/* Model Image */}
        <img
          className="w-40 h-40 object-contain"
          src={model.image}
          alt={model.title}
        />
      </div>

      {/* Bottom Content */}
      <div className="p-7">
        {/* Title */}
        <h1 className="text-[38px] md:text-[30px] font-bold text-[#111827] mb-3 leading-none">
          {model.title}
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-[15px] leading-7 mb-7 min-h-22.5">
          {model.description}
        </p>

        {/* Price */}
        <div className="flex items-end gap-1 mb-7">
          <span
            className={`text-4xl font-bold ${
              model.price === "Free" ? "text-green-500" : "text-black"
            }`}
          >
            {model.price === 0 ? (
              <p className="text-[#00d491]">Free</p>
            ) : (
              `$${model.price}`
            )}
          </span>

          {model.price !== 0 && (
            <span className="text-gray-500 text-lg mb-1">/month</span>
          )}
        </div>

        {/* Button */}
        <button className="w-full bg-red-600 hover:bg-red-700 transition-all duration-300 text-white font-semibold text-lg py-4 rounded-2xl shadow-lg shadow-red-500/20 cursor-pointer">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default Model;
