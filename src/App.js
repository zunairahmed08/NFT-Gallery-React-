import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
import NFTDetails from "./pages/NFTDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/nft/:id" element={<NFTDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
