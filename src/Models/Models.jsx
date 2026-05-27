import { use, useState } from "react";
import "../index.css";
import Model from "./Model/Model";
import Cart from "../Cart/Cart";





const Models = ({ modelsPromise }) => {
  const models = use(modelsPromise);

  const [active, setActive] = useState("model")
  
  
  
  return (
    <div className="max-w-350 mx-auto px-4 py-16">
      <div
        role="tablist"
        className="tabs tabs-box items-center justify-center mb-12 bg-transparent gap-20"
      >
        <a
          role="tab"
          className={`tab rounded-4xl px-20 ${
            active === "model"
              ? "bg-linear-to-r from-pink-500 to-red-500 text-white"
              : ""
          }`}
          onClick={() => setActive("model")}
        >
          Models
        </a>

        <a
          role="tab"
          className={`tab rounded-4xl px-20 ${
            active === "cart"
              ? "bg-linear-to-r from-pink-500 to-red-500 text-white"
              : ""
          }`}
          onClick={() => setActive("cart")}
        >
          Cart (0)
        </a>
      </div>


      {active=== "model" && <div className="text-center">
        <h1 className="font-bold text-5xl text-black">Choose Your AI Model</h1>
        <p className="text-xl text-gray-500 ">
          One subscription will gives you access to all frontier AI models.
        </p>
      </div>
}
      
      {active === "model" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-20">
          {models.map((model) => (
            <Model key={model.id} model={model}></Model>
          ))}
        </div>
      ) : (
        <Cart />
      )}
    </div>
  );
};
export default Models;
