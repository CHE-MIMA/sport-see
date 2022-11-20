
import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from 'react';
import Dashbord from "./pages/Dashbord";
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashbord />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
