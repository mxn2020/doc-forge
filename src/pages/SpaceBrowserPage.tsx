import { FileText, Clock, ChevronRight, Plus, Star } from "lucide-react";
import { Button, Card } from "@geenius-ui/react-css";

export default function SpaceBrowserPage() {
    const spaces = [
        { name: "Engineering", icon: "🔧", docs: 12, updated: "2 hours ago", pinned: true },
        { name: "Product", icon: "📦", docs: 8, updated: "1 day ago", pinned: true },
        { name: "Design System", icon: "🎨", docs: 5, updated: "3 days ago", pinned: false },
        { name: "Onboarding", icon: "🚀", docs: 3, updated: "1 week ago", pinned: false }
    ];

    const recent = [
        { title: "Architecture Guide", space: "Engineering", updated: "2 hours ago" },
        { title: "Q4 Roadmap", space: "Product", updated: "5 hours ago" },
        { title: "Color Palette", space: "Design System", updated: "1 day ago" }
    ];

    return (<div style={{ padding: "var(--space-6)", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <div>
                <h1 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, marginBottom: 4 }}>Workspace</h1>
                <p style={{ color: "var(--color-text-secondary)" }}>Browse your docs and spaces.</p>
            </div>
            <Button variant="primary" icon={<Plus size={16} />}>New Document</Button>
        </div>

        <div style={{ marginBottom: "var(--space-6)" }}>
            <h2 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "var(--space-4)" }}>Spaces</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: "var(--space-4)" }}>
                {spaces.map(s => (
                    <Card key={s.name} padding="lg" hover>
                        {s.pinned && <Star size={14} fill="var(--color-accent-primary)" style={{ position: "absolute", top: 12, right: 12, color: "var(--color-accent-primary)" }} />}
                        <div style={{ fontSize: "32px", marginBottom: "var(--space-3)" }}>{s.icon}</div>
                        <h3 style={{ fontWeight: 700, fontSize: "17px", marginBottom: 4 }}>{s.name}</h3>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "var(--color-text-tertiary)", fontSize: "13px", fontWeight: 500 }}>
                            <span>{s.docs} docs</span>
                            <span>{s.updated}</span>
                        </div>
                    </Card>
                ))}
            </div>
        </div>

        <div>
            <h2 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "var(--space-4)" }}>Recent Documents</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                {recent.map(r => (
                    <Card key={r.title} padding="md" hover>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                                <FileText size={18} style={{ color: "var(--color-accent-primary)" }} />
                                <div>
                                    <h4 style={{ fontWeight: 600, fontSize: "15px" }}>{r.title}</h4>
                                    <span style={{ fontSize: "12px", color: "var(--color-text-tertiary)" }}>{r.space}</span>
                                </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", color: "var(--color-text-tertiary)", fontSize: "13px" }}>
                                <Clock size={14} /> {r.updated}
                                <ChevronRight size={16} />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    </div>);
}
