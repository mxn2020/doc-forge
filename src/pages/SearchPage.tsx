import { Search as SearchIcon, FileText, Clock } from "lucide-react";
import { Card, Input, Badge } from "@geenius-ui/react-css";

export default function SearchPage() {
    const results = [
        { title: "Architecture Guide", space: "Engineering", snippet: "…the high-level architecture of the OpenClaw ecosystem. It covers the main subsystems…", updated: "2h ago" },
        { title: "API Reference", space: "Engineering", snippet: "…POST /api/v1/agents — Create a new agent instance. Required fields: name, clawspaceId…", updated: "1d ago" },
        { title: "Q4 Roadmap", space: "Product", snippet: "…Phase 7 includes the Productivity & Collaboration suite: Kanban Flow, Retro Board…", updated: "5h ago" }
    ];

    return (<div style={{ padding: "var(--space-6)", maxWidth: 800, margin: "0 auto" }}>
        <h1 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, marginBottom: "var(--space-6)" }}>Search Documents</h1>

        <div style={{ position: "relative", marginBottom: "var(--space-6)" }}>
            <SearchIcon size={20} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "var(--color-text-tertiary)", zIndex: 1 }} />
            <Input type="text" defaultValue="architecture" placeholder="Search across all documents…" style={{ width: "100%", paddingLeft: 48, fontSize: "16px", borderWidth: 2, borderColor: "var(--color-accent-primary)" }} />
        </div>

        <div style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginBottom: "var(--space-4)" }}>
            Found <strong style={{ color: "var(--color-text-primary)" }}>3 results</strong> for "architecture"
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {results.map(r => (
                <Card key={r.title} padding="lg" hover>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--space-2)" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                            <FileText size={16} style={{ color: "var(--color-accent-primary)" }} />
                            <h3 style={{ fontWeight: 700, fontSize: "16px" }}>{r.title}</h3>
                            <Badge variant="secondary" size="sm">{r.space}</Badge>
                        </div>
                        <span style={{ fontSize: "12px", color: "var(--color-text-tertiary)", display: "flex", alignItems: "center", gap: 4 }}><Clock size={12} />{r.updated}</span>
                    </div>
                    <p style={{ color: "var(--color-text-secondary)", fontSize: "15px", fontFamily: "var(--font-serif)", lineHeight: 1.6 }}>{r.snippet}</p>
                </Card>
            ))}
        </div>
    </div>);
}
