import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./globals.css";

const DocsLayout = lazy(() => import("./components/layout/DocLayout"));
const Home = lazy(() => import("./pages/Home"));
const GetStarted = lazy(() => import("./pages/GetStarted"));
const Installation = lazy(() => import("./pages/Installation"));
const Introduction = lazy(() => import("./pages/Introduction"));
const Routing = lazy(() => import("./pages/Routing"));
const Middlewares = lazy(() => import("./pages/Middlewares"));
const Validation = lazy(() => import("./pages/Validation"));
const RequestResponse = lazy(() => import("./pages/RequestResponse"));
const Security = lazy(() => import("./pages/Security"));
const Authentication = lazy(() => import("./pages/Authentication"));
const Configuration = lazy(() => import("./pages/Configuration"));
const EngineTemplates = lazy(() => import("./pages/EngineTemplates"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/docs" element={<DocsLayout />}>
            <Route index element={<Navigate to="getting-started" replace />} />
            <Route path="getting-started" element={<GetStarted />} />
            <Route path="installation" element={<Installation />} />
            <Route path="introduction" element={<Introduction />} />
            <Route path="routing" element={<Routing />} />
            <Route path="middlewares" element={<Middlewares />} />
            <Route path="validation" element={<Validation />} />
            <Route path="request-response" element={<RequestResponse />} />
            <Route path="security" element={<Security />} />
            <Route path="authentication" element={<Authentication />} />
            <Route path="basic-configuration" element={<Configuration />} />
            <Route path="engine-templates" element={<EngineTemplates />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
