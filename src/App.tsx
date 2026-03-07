import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DocsLayout from "./components/layout/DocLayout";
import "./globals.css";
import Home from "./pages/Home";
import GetStarted from "./pages/GetStarted";
import Installation from "./pages/Installation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/docs" element={<DocsLayout />}>
          <Route index element={<Navigate to="getting-started" replace />} />
          <Route path="getting-started" element={<GetStarted />} />
          <Route path="installation" element={<Installation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
