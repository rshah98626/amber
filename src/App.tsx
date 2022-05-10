import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Gallery from "./components/Gallery";
import UnknownRoute from "./components/UnknownRoute";
import NFTItemDetail from "./components/NFTItem/Detail/NFTItemDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/item" element={<NFTItemDetail />} />
          <Route path="*" element={<UnknownRoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
