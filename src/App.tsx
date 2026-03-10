import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DocsLayout from "./components/layout/DocLayout";
import "./globals.css";
import Home from "./pages/Home";
import GetStarted from "./pages/GetStarted";
import Installation from "./pages/Installation";
import Introduction from "./pages/Introduction";
import Routing from "./pages/Routing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/docs" element={<DocsLayout />}>
          <Route index element={<Navigate to="getting-started" replace />} />
          <Route path="getting-started" element={<GetStarted />} />
          <Route path="installation" element={<Installation />} />
          <Route path="introduction" element={<Introduction />} />
          <Route path="routing" element={<Routing/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
