
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import EventListingPage from "./views/Events/Event";
import React from "react";


const App = () => {

  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventListingPage />} />
       
      </Routes>
    </Router>
  );
};

export default App;

