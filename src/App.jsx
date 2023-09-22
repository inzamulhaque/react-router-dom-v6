import { useEffect, useState } from "react";
import "./App.css";
import MainRoutes from "./MainRoutes";
import Menu from "./components/menu/Menu";

function App() {
  const [user, setUser] = useState({});
  const [userStatus, setUserStatus] = useState(false);

  useEffect(() => {
    setUser({
      email: "alif@gmail.com",
      password: 123456,
    });
  }, []);

  return (
    <>
      <Menu userStatus={userStatus} />

      <MainRoutes userData={user} userStatus={{ userStatus, setUserStatus }} />
    </>
  );
}

export default App;
