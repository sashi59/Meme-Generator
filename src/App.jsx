import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Edit from "./pages/Edit";

function App() {
  return (
    <>
      <h1>Meme Generator App </h1>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/edit" element={<Edit/>}/>

      </Routes>
    </>
  );
}

export default App;
