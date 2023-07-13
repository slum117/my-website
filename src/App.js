import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./screens/home";
import ProjectsPage from "./screens/projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Projects" element={<ProjectsPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
