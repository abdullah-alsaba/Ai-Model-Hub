import { use } from "react";
import "../index.css";
import Model from "./Model/Model";
const Models = ({ modelsPromise }) => {
  const models = use(modelsPromise);
  console.log(models);
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 ">
     
      <div className="text-center">
        
        <h1 className="font-bold text-5xl text-black">
          Choose Your AI Model
        </h1>
        <p className="text-xl text-gray-500">
          
          One subscription will gives you access to all frontier AI models.
        </p>
      </div>
      {models.map(model => (
        <Model key={model.id} model={model}></Model>
      ))}
    </div>
  );
};
export default Models;
