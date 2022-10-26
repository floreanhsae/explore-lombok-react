import { Route, Routes } from "react-router";
import Dashboard from "./views/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
