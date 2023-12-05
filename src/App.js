import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Festival from "./routes/Festival";
import FestivalDetail from "./routes/FestivalDetail";
import Show from "./routes/Show";
import ShowDetail from "./routes/ShowDetail";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/festival/" element={<Festival num="0" />} />
        <Route path="/festival_search/:id" element={<Festival />} />
        <Route path="/festival/:id" element={<FestivalDetail />} />
        <Route path="/show/" element={<Show num="1" />} />
        <Route path="/show_search/:id" element={<Show />} />
        <Route path="/show/:id" element={<ShowDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
