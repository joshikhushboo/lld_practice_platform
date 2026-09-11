import { BrowserRouter, Routes, Route } from "react-router-dom";
import Problems from "./pages/problems";
import Practice from "./pages/practice";
import Feedback from "./pages/Feedback";
import History from "./pages/History";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Problems />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;