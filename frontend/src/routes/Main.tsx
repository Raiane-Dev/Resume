import { Routes, Route } from "react-router-dom";

import Home from "../views/Home";

const Main = () =>
(
    <Routes>
        <Route path="/" element={<Home />} /> 
    </Routes>
);

export default Main;