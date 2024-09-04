import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Semester2 from "./pages/semester2";
import Semester1 from "./pages/semester1";
import SubjectPage from "./pages/SubjectDetails";
import ExtraCurricular from "./pages/extracurricular";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/semester1" element={<Semester1 />} />
        <Route path="/semester2" element={<Semester2 />} />
        <Route path="/extracurricular" element={<ExtraCurricular />} />
        <Route path="/:semester/:id" element={<SubjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
