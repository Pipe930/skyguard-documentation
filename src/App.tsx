import { Suspense, lazy } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import "./globals.css";

const DocsLayout = lazy(() => import("./components/layout/DocLayout"));
const Home = lazy(() => import("./pages/Home"));
const GetStarted = lazy(() => import("./pages/GetStarted"));
const Installation = lazy(() => import("./pages/Installation"));
const Introduction = lazy(() => import("./pages/Introduction"));
const Routing = lazy(() => import("./pages/Routing"));
const Middlewares = lazy(() => import("./pages/Middlewares"));
const Validation = lazy(() => import("./pages/Validation"));
const Context = lazy(() => import("./pages/RequestResponse"));
const Exceptions = lazy(() => import("./pages/Exceptions"));
const Authentication = lazy(() => import("./pages/Authentication"));
const EncryptionHashing = lazy(() => import("./pages/EncryptionHashing"));
const Cors = lazy(() => import("./pages/Cors"));
const CsrfProtection = lazy(() => import("./pages/CsrfProtection"));
const RateLimiting = lazy(() => import("./pages/RateLimiting"));
const Configuration = lazy(() => import("./pages/Configuration"));
const EngineTemplates = lazy(() => import("./pages/EngineTemplates"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <HashRouter>
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
            <Route path="context" element={<Context />} />
            <Route
              path="request-response"
              element={<Navigate to="/docs/context" replace />}
            />
            <Route path="exceptions" element={<Exceptions />} />
            <Route path="authentication" element={<Authentication />} />
            <Route path="encryption-hashing" element={<EncryptionHashing />} />
            <Route path="cors" element={<Cors />} />
            <Route path="csrf-protection" element={<CsrfProtection />} />
            <Route path="rate-limiting" element={<RateLimiting />} />
            <Route path="basic-configuration" element={<Configuration />} />
            <Route path="engine-templates" element={<EngineTemplates />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
