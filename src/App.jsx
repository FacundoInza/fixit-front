import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";

function App() {
  const actualUser = useSelector((state) => state.user);
  console.log(actualUser.email);
  return (
    <>
      {actualUser.email ? (
        <h1>is Logued</h1>
      ) : (
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </>
  );
}

export default App;
