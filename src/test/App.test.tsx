import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SpaceBrowserPage from "../pages/SpaceBrowserPage";
import EditorPage from "../pages/EditorPage";
import SearchPage from "../pages/SearchPage";

function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }

describe("Pages", () => {
    it("Sidebar renders", () => { wrap(<Sidebar />); expect(screen.getByText("DocForge")).toBeInTheDocument(); });
    it("SpaceBrowserPage renders", () => { wrap(<SpaceBrowserPage />); expect(screen.getByText("Workspace")).toBeInTheDocument(); });
    it("EditorPage renders", () => { wrap(<EditorPage />); expect(screen.getByText("System Overview")).toBeInTheDocument(); });
    it("SearchPage renders", () => { wrap(<SearchPage />); expect(screen.getByText("Search Documents")).toBeInTheDocument(); });
});
