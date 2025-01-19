import { Routes, Route } from "react-router";
import Home from "@/pages/home";
import DetailPage from "@/pages/detail";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/detail/:id" element={<DetailPage />} />
    </Routes>
  );
};

export default App;
