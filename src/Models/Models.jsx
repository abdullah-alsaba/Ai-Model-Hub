import { use } from "react";
import "../index.css"

const Models = ({ modelsPromise }) => {
    const models = use(modelsPromise)
    console.log(models)
  return (
    <div className="container mx-auto px-4 flex justify-center items-center">
      
    </div>
  );
};

export default Models;