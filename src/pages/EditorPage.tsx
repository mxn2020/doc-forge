import { Save, Share2, MoreHorizontal, MessageSquare, Clock } from "lucide-react";
import { Button } from "@geenius-ui/react-css";

export default function EditorPage() {
    return (<div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <div style={{ padding: "var(--space-3) var(--space-6)", borderBottom: "1px solid var(--color-border)", display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--color-bg-card)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                <span style={{ color: "var(--color-text-tertiary)", fontSize: "14px" }}>Engineering /</span>
                <h1 style={{ fontSize: "16px", fontWeight: 700 }}>Architecture Guide</h1>
                <span style={{ fontSize: "12px", color: "var(--color-text-tertiary)", display: "flex", alignItems: "center", gap: 4 }}><Clock size={12} /> Edited 2 hours ago</span>
            </div>
            <div style={{ display: "flex", gap: "var(--space-2)" }}>
                <Button variant="ghost" size="sm"><MessageSquare size={14} /> 3</Button>
                <Button variant="outline" size="sm" icon={<Share2 size={14} />}>Share</Button>
                <Button variant="primary" size="sm" icon={<Save size={14} />}>Save</Button>
                <Button variant="ghost" size="sm" icon={<MoreHorizontal size={16} />} />
            </div>
        </div>

        <div style={{ flex: 1, overflow: "auto", padding: "48px var(--space-6)" }}>
            <div className="prose">
                <h1>Architecture Guide</h1>
                <p>This document describes the high-level architecture of the OpenClaw ecosystem. It covers the main subsystems, how they interact, and the key design decisions behind our choices.</p>

                <h2>System Overview</h2>
                <p>The platform is composed of three primary layers: the <strong>Control Plane</strong> (Mission Control), the <strong>Execution Layer</strong> (Agents and Clawspaces), and the <strong>Data Layer</strong> (Convex). Each layer communicates via well-defined APIs.</p>

                <p>The Control Plane orchestrates agent lifecycles, manages configuration, and provides the user-facing dashboard. It is a React application backed by Convex for real-time data synchronization.</p>

                <h2>Agent Architecture</h2>
                <p>Each agent runs as an isolated process in its own <code>Clawspace</code>. A Clawspace defines the agent's identity, capabilities, and the toolboxes it has access to. Agents communicate through a message bus pattern, enabling both synchronous tool calls and asynchronous event-driven workflows.</p>

                <p>The key components of an agent include:</p>
                <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.25rem" }}>
                    <li style={{ marginBottom: "0.5rem" }}>System prompt and personality configuration</li>
                    <li style={{ marginBottom: "0.5rem" }}>Toolbox bindings (Python SDK)</li>
                    <li style={{ marginBottom: "0.5rem" }}>Memory and context window management</li>
                    <li style={{ marginBottom: "0.5rem" }}>Inter-agent communication channels</li>
                </ul>

                <h2>Data Layer</h2>
                <p>All persistent data flows through <strong>Convex</strong>, our serverless database. Convex provides automatic caching, real-time subscriptions, and transactional writes — enabling the responsive UI experience users expect from modern applications.</p>
            </div>
        </div>
    </div>);
}
