import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";
import Refund from "./pages/Refund";
import CourtMarriage from "./pages/CourtMarriage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/court-marriage" element={<CourtMarriage />} />
            <Route path="/marriage-certificate" element={<Registration />} />
            <Route path="/aryasamaj-marriage" element={<Registration />} />
            <Route path="/divorce" element={<Registration />} />
            <Route path="/divorce-paper" element={<Registration />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/refund" element={<Refund />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
