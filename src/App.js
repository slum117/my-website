import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./screens/home";
import ProjectsPage from "./screens/projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Project" element={<ProjectsPage/>}/>
        {/* <Route path="/*" element = {<div>404</div>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
