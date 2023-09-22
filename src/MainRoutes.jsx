import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Signin from "./components/Signin/Signin";
import Error404 from "./components/Error404/Error404";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Protected from "./components/Protected/Protected";
import Private from "./components/Private/Private";

export default function MainRoutes({ userData, userStatus }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/signin"
        element={
          <Signin
            userData={userData}
            userStatus={userStatus}
          />
        }
      />

      <Route path="/protected" element={<RequireAuth userStatus={userStatus}>
        <Protected/>
      </RequireAuth>} />

      {userStatus?.userStatus && <Route path="/private" element={<RequireAuth userStatus={userStatus}>
        <Private/>
      </RequireAuth>} />}

      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
}
