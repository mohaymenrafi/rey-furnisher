import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header, Theme } from "./components";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import GlobalStyle from "./styles/globalstyle";

function App() {
  return (
    <BrowserRouter>
      <Theme>
        <GlobalStyle />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="shop" element={<Shop />} />
        </Routes>

        <Footer />
      </Theme>
    </BrowserRouter>
  );
}

export default App;
