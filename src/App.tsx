import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Resources from "./pages/Resources";

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Navbar />

      <div>
        <Routes>
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<Navigate to="/resources" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
