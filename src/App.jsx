import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation  } from "react-router-dom";
import "./App.css";
import MainHeader from "./components/Header/Header";
import Main from "./components/Main/Main";

function Header() {
  const location = useLocation(); 
  return location.pathname === "/" ? <MainHeader /> : <MainHeader />;
}



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
