import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Header from "./components/Header/Header";
import FooterComponent from "./components/Footer/Footer";
import About from "./views/About/About";
import NotFound from "./views/NotFound/NotFound";
import "./main.scss";

function Router() {
  return (
    <div className="page-wrapper">
      <BrowserRouter>
        <Header />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default Router;
