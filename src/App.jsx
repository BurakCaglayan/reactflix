import Home from "@/pages/home";
import { Routes, Route } from "react-router";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
