import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Services from "./pages/Services";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="services" element={<Services />} />
      </Route>
    </Routes>
  );
}

export default App;
