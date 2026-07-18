"use client";

import { MindMap, MindMapControls } from "@/registry/mindmap";
import type { MindElixirData } from "mind-elixir";

const markdownData: MindElixirData = {
  nodeData: {
    id: "root",
    topic: "**Product** Launch Plan",
    children: [
      {
        id: "goals",
        topic: "Goals",
        children: [
          { id: "g1", topic: "Ship *MVP* in Q3" },
          { id: "g2", topic: "Reach `10k` waitlist signups" },
        ],
      },
      {
        id: "channels",
        topic: "Channels",
        children: [
          { id: "c1", topic: "**Blog** + SEO" },
          { id: "c2", topic: "Launch on *Product Hunt*" },
          { id: "c3", topic: "Partner `newsletter`" },
        ],
      },
      {
        id: "risks",
        topic: "Risks",
        children: [
          { id: "r1", topic: "Scope *creep*" },
          { id: "r2", topic: "Late **design** polish" },
        ],
      },
    ],
  },
};

/** Minimal demo parser — swap for marked / markdown-it in production. */
function simpleMarkdown(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code>$1</code>");
}

export function MarkdownMindMapExample() {
  return (
    <div className="h-[400px] w-full rounded-lg border bg-background overflow-hidden relative">
      <MindMap
        data={markdownData}
        readonly
        markdown={(text) => simpleMarkdown(text)}
      >
        <MindMapControls showExport={false} />
      </MindMap>
      <div className="absolute bottom-3 left-3 z-10 rounded-md bg-background/95 backdrop-blur-md border border-border/50 shadow-lg p-3 max-w-xs">
        <p className="text-xs text-muted-foreground">
          Topics use <code className="text-foreground">**bold**</code>,{" "}
          <code className="text-foreground">*italic*</code>, and{" "}
          <code className="text-foreground">`code`</code> via a custom{" "}
          <code className="text-foreground">markdown</code> parser.
        </p>
      </div>
    </div>
  );
}
