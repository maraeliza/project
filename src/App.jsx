import { HashRouter as Router, Routes, Route } from "react-router-dom";

import ScreenLogin from "./screens/screenLogin.jsx";
import ScreenRegister from "./screens/screenRegister.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/registro" element={<ScreenRegister />} />
        <Route path="/login" element={<ScreenLogin />} />

        <Route path="/" element={<ScreenLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
