import { Routes, Route } from "react-router-dom";

import HomePage from "./assets/Home";
import DiscoverPage from "./assets/DiscoverPage";
import CirclePage from "./assets/CirclePage.jsx";

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/discover" element={<DiscoverPage />} />
      <Route path="/circle" element={<CirclePage />} />
    </Routes>
  );
}
