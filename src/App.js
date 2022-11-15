
import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from 'react';
import Dashbord from "./pages/Dashbord";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashbord />} />
        <Route path="*" element={<Dashbord />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
