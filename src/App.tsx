import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Gallery from "./components/Gallery";
import UnknownRoute from "./components/UnknownRoute";
import GalleryClickDetail from "./components/Gallery/ClickDetail/GalleryClickDetail";
import NFTItemRouteParser from "./components/NFTItem/RouteParser/NFTItemRouteParser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>AMBER</h1>} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/item" element={<GalleryClickDetail />} />
          <Route path="/item/:itemId" element={<NFTItemRouteParser />} />
          <Route path="*" element={<UnknownRoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
