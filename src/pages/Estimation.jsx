import React from "react";
import "../css/EstStart.css";
import { Routes, Route, Outlet } from "react-router-dom";
import EstReciept from "../components/EstReciept";
import EstStart from "../components/EstStart";
import EstQuestion from "../components/EstQuestion";
import EstResult from "../components/EstResult";
import Navbar from "../components/Navbar";

// ๐ผ๐ผ๐ผ ํฌ์ง์ ์ pages ํด๋์ ๋ค์ด๊ฐ ์์ง๋ง ์ค์ ๋ก ์ถ๋ ฅ๋์ง ์๋ component์๋๋ค ๐ผ๐ผ๐ผ

const Estimation = () => {
  return (
    <div className="est-body">
      {/** ์์ ๊ธฐ */}
      {/* <Routes>
        <Route path="/start" element={<EstStart />} />
        <Route path="/question" element={<EstQuestion />} />
        <Route path="/result" element={<EstResult />} />
        <Route path="/reciept" element={<EstReciept />} />
      </Routes> */}
    </div>
  );
};

export default Estimation;
