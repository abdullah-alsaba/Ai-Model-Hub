import { Suspense } from "react";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import Models from "./Models/Models";
import NavBar from "./Navbar/Navbar";
import "./index.css";
import Loading from "./Loading/Loading";
import { ToastContainer } from "react-toastify";


const fetchModels = async () => {
  const res = await fetch("./models.json")
  return res.json()
}
 
function App() {

  const modelsPromise = fetchModels()
  
 
  
  return (
    <>
      <NavBar />
      <Banner />
      <Suspense fallback={<Loading></Loading>}>
        <Models modelsPromise={modelsPromise} />
      </Suspense>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
