import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import { axiosAllDevices, axiosSecret } from "./services/api";
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
import OfficeMap from "./components/pages/PrincipalFlow/OfficeMap";
import ObjectDetectionComponent from "./components/pages/PrincipalFlow/ObjectDetectionComponent";
import Description from "./components/pages/PrincipalFlow/Description";
import AddressConfirmation from "./components/pages/PrincipalFlow/AddressConfirmation";
import StartScan from "./components/pages/PrincipalFlow/StartScan";
import DeviceList from "./components/pages/PrincipalFlow/DeviceList";
import SelectOffice from "./components/pages/PrincipalFlow/SelectOffice";
import { setDevices } from "./store/devices";
import Principal from "./components/pages/adminViews/Principal";
import EditOwner from "./components/pages/adminViews/EditOwner";
import AdminEditStatus from "./components/pages/adminViews/AdminEditStatus";
import AdminFilterCases from "./components/pages/adminViews/AdminFilterCases";
import Error404View from "./components/commons/Error404View";

function App() {
  const actualUser = useSelector((state) => state.user);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const dispatch = useDispatch();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if (localStorage.getItem("token")) {
      persintence();
    }
  }, [token]);

  const persintence = async () => {
    const data = await axiosSecret();
    const devices = await axiosAllDevices();
    dispatch(setUser(data));
    dispatch(setDevices(devices));
  };

  return (
    <>
      {actualUser.email ? (
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/reports" element={<UserReports />} />
          <Route path="/" element={<NewReport />} />
          <Route path="/work-options" element={<WorkOptions />} />
          <Route path="/map-selection" element={<OfficeMap />} />
          <Route path="/description" element={<Description />} />
          <Route
            path="/address-confirmation"
            element={<AddressConfirmation />}
          />
          <Route path="/location" element={<Location />} />
          <Route path="/report/:id" element={<IndividualReport />} />
          <Route path="/start-scan" element={<StartScan />} />
          <Route path="/scanner" element={<ObjectDetectionComponent />} />
          <Route path="/device-list" element={<DeviceList />} />
          <Route path="/select-office" element={<SelectOffice />} />
          <Route path="/*" element={<Error404View />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/*" element={<Error404View />} />
        </Routes>
      )}

      {actualUser.is_admin && (
        <Routes>
          <Route path="/principal-admin-views" element={<Principal />} />
          <Route path="/edit-owner" element={<EditOwner />} />
          <Route path="/edit-status" element={<AdminEditStatus />} />
          <Route path="/filter-cases" element={<AdminFilterCases />} />
          <Route path="/*" element={<Error404View />} />
        </Routes>
      )}
    </>
  );
}

export default App;
