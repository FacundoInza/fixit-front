import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router";
import Home from "./components/pages/Home";

function App() {
  const actualUser = useSelector((state) => state.user);
  console.log(actualUser.email);
  return (
    <>
      <Navbar />

      {actualUser.email ? (
        <h1>is Logued</h1>
      ) : (
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      )}
    </>
  );
}

export default App;
