import Home from "./pages/Home";
import DocsLayout from "./components/layout/DocLayout";
import GetStarted from "./pages/GetStarted";
import './globals.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/docs" element={<DocsLayout/>}>
                    <Route path="getting-started" element={<GetStarted/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;