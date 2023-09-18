import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Signin from "./components/Signin/Signin";
import Error404 from "./components/Error404/Error404";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signin" element={<Signin />} />

      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
}
