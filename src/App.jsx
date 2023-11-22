import "./App.css";
import "./sass/main.scss";
import { Routes,Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Modalka from "./components/Layout/Modalka";
import RandomImg from "./components/Layout/RandomImg";

function App(){
  return(
  <>
  <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Modalka/>}/>
      <Route path="randomImg" element={<RandomImg/>}/>
    </Route>
  </Routes>
  </>
  )
}


export default App;
