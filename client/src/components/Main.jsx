import { Routes, Route } from "react-router-dom";

import HomePage from "./Home";
import DiscoverPage from "./DiscoverPage";
import CirclePage from "./CirclePage.jsx";

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/discover" element={<DiscoverPage />} />
      <Route path="/circle" element={<CirclePage />} />
    </Routes>
  );
}
