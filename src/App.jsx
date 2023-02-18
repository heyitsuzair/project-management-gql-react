import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./inc/components/Header";
import Clients from "./inc/components/Clients";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Clients />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
