import { use } from "react";
import "../index.css";
import Model from "./Model/Model";
const Models = ({ modelsPromise }) => {
  const models = use(modelsPromise);
  console.log(models);
  return (
    <div className="max-w-350 mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="font-bold text-5xl text-black">Choose Your AI Model</h1>
        <p className="text-xl text-gray-500 ">
          One subscription will gives you access to all frontier AI models.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-20">
        {models.map((model) => (
          <Model key={model.id} model={model}></Model>
        ))}
      </div>
    </div>
  );
};
export default Models;
