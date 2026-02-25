import { Link, useLocation } from "react-router-dom";
import { BookOpen, PenLine, Search, ChevronRight, FileText, Folder, Plus } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
export default function Sidebar() {
    const loc = useLocation();
    const links = [
        { to: "/", icon: BookOpen, label: "Space Browser" },
        { to: "/editor", icon: PenLine, label: "Editor" },
        { to: "/search", icon: Search, label: "Search" }
    ];
    return (<aside style={{ width: "var(--sidebar-width)", background: "var(--color-bg-card)", borderRight: "1px solid var(--color-border)", height: "100vh", position: "fixed", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "var(--space-4) var(--space-5)", display: "flex", alignItems: "center", gap: "var(--space-3)", borderBottom: "1px solid var(--color-border)" }}>
            <div style={{ color: "var(--color-accent-primary)" }}><PenLine size={22} strokeWidth={2.5} /></div>
            <strong style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.5px" }}>DocForge</strong>
        </div>

        <nav style={{ padding: "var(--space-3)", display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
            {links.map(l => <Link key={l.to} to={l.to} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "8px 12px", borderRadius: "var(--radius-sm)", color: loc.pathname === l.to ? "var(--color-accent-primary)" : "var(--color-text-secondary)", background: loc.pathname === l.to ? "var(--color-accent-soft)" : "transparent", fontWeight: loc.pathname === l.to ? 700 : 500, fontSize: "14px", transition: "all var(--transition-fast)" }}><l.icon size={16} />{l.label}</Link>)}
        </nav>

        <div style={{ padding: "var(--space-3) var(--space-5)", flex: 1, overflow: "auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-3)" }}>
                <h3 style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: 0.5 }}>Document Tree</h3>
                <button className="btn-ghost" style={{ padding: 2, color: "var(--color-text-tertiary)" }}><Plus size={14} /></button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <div className="doc-tree-item"><Folder size={14} /> Engineering</div>
                <div style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 2 }}>
                    <div className="doc-tree-item active"><FileText size={14} /> Architecture Guide</div>
                    <div className="doc-tree-item"><FileText size={14} /> API Reference</div>
                    <div className="doc-tree-item"><FileText size={14} /> Dev Setup</div>
                </div>
                <div className="doc-tree-item"><Folder size={14} /> Product</div>
                <div className="doc-tree-item"><Folder size={14} /> Design System</div>
            </div>
        </div>

        <div style={{ padding: "var(--space-4)", borderTop: "1px solid var(--color-border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--color-accent-primary)", color: "var(--color-text-inverse)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "11px" }}>MN</div>
                <span style={{ fontSize: "13px", fontWeight: 600 }}>Mehdi</span>
            </div>
            <ThemeToggle />
        </div>
    </aside>);
}
