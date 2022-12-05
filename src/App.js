
import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from 'react';
import Dashbord from "./pages/Dashbord";
import Error from "./pages/Erreur/Error";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/:id" element={<Dashbord />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
