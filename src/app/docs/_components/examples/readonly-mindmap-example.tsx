"use client";

import { MindMap, MindMapControls } from "@/registry/mindmap";
import type { MindElixirData } from "mind-elixir";

const organizationData: MindElixirData = {
  nodeData: {
    id: "root",
    topic: "Organization Structure",
    children: [
      {
        id: "engineering",
        topic: "Engineering",
        children: [
          { id: "frontend", topic: "Frontend Team" },
          { id: "backend", topic: "Backend Team" },
          { id: "devops", topic: "DevOps Team" },
        ],
      },
      {
        id: "product",
        topic: "Product",
        children: [
          { id: "design", topic: "Design Team" },
          { id: "pm", topic: "Product Managers" },
        ],
      },
      {
        id: "sales",
        topic: "Sales & Marketing",
        children: [
          { id: "sales-team", topic: "Sales Team" },
          { id: "marketing", topic: "Marketing Team" },
        ],
      },
    ],
  },
};

export function ReadonlyMindMapExample() {
  return (
    <div className="h-[400px] w-full rounded-lg border bg-background overflow-hidden relative">
      <MindMap
        data={organizationData}
        readonly={true}
      >
        <MindMapControls showExport={false} />
      </MindMap>
      <div className="absolute bottom-3 left-3 z-10 rounded-md bg-background/95 backdrop-blur-md border border-border/50 shadow-lg p-3">
        <p className="text-xs text-muted-foreground">
          📖 View-only mode - no editing allowed
        </p>
      </div>
    </div>
  );
}
