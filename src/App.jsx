import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";

import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile/Profile";

function App() {
  const actualUser = useSelector((state) => state.user);

  return (
    <>
      {actualUser.email ? (
        <Routes>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      )}
    </>
  );
}

export default App;
