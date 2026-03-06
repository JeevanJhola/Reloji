import { Routes, Route } from "react-router-dom";
import Main from "../components/Main";    
import AddItem from "../components/assets/AddItem";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<Main />} />
      <Route path="/add-item" element={<AddItem />} />
    </Routes>
  );
}

