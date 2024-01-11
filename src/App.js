import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <Topbar />

      <Routes>
        <Route path="/" exact element={<Home />} /> 
        <Route path="/login" element={user ? <Home/> : <Login />} />
        <Route path="/register" element={user ? <Home/> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/write" element={user ? <Write/> : <Register />} />
      </Routes>
    </Router>
  );
}

export default App;