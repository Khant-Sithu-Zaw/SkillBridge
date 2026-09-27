import { BrowserRouter, Route, Routes } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Help from "./pages/Help";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public pages */}
        <Route element={<PublicLayout />}>

          <Route path="/" element={<Login />} />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/forgot-password"
            element={<ForgotPassword />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/how-it-works"
            element={<HowItWorks />}
          />

          <Route
            path="/help"
            element={<Help />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;