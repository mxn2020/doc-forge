import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SpaceBrowserPage from "./pages/SpaceBrowserPage";
import EditorPage from "./pages/EditorPage";
import SearchPage from "./pages/SearchPage";

export default function App() {
  return (<BrowserRouter>
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ marginLeft: "var(--sidebar-width)", flex: 1, minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<SpaceBrowserPage />} />
          <Route path="/editor" element={<EditorPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>);
}
