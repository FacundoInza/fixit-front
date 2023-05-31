import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./store/users";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  const user = useSelector((state) => state.user);
  console.log(user);

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
