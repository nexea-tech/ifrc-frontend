import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import ForgotPassword from "./components/Forgetpassword/ForgetPassword";
import { RegisterConfirmation } from "./components/RegisterConfirmation/RegisterConfirmation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
        <Route path="/register-confirm" element={<RegisterConfirmation />} />
      </Routes>
    </>
  );
}

export default App;
