import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import { useEffect } from "react";
import { axiosSecret } from "./services/api";
import { setUser } from "./store/users";

import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile/Profile";
import UserReports from "./components/pages/Profile/UserReports";
import NewReport from "./components/pages/PrincipalFlow/NewReport";
import Location from "./components/pages/PrincipalFlow/Location";
import WorkOptions from "./components/pages/PrincipalFlow/WorkOptions";
import IndividualReport from "./components/pages/Profile/IndividualReport";

function App() {
  const actualUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const persintence = async () => {
      const data = await axiosSecret();
      dispatch(setUser(data));
    };
    if (document.cookie) {
      persintence();
    }
  }, []);

  return (
    <>
      {actualUser.email ? (
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/reports" element={<UserReports />} />
          <Route path="/" element={<NewReport />} />
          <Route path="/work-options" element={<WorkOptions />} />
          <Route path="/location" element={<Location />} />
          <Route path="/report" element={<IndividualReport />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      )}
    </>
  );
}

export default App;
