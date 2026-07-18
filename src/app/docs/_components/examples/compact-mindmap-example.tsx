"use client";

import { useState } from "react";
import { MindMap, MindMapControls } from "@/registry/mindmap";
import type { MindElixirData } from "mind-elixir";
import { Button } from "@/components/ui/button";

const denseData: MindElixirData = {
  nodeData: {
    id: "root",
    topic: "Knowledge Base",
    children: [
      {
        id: "frontend",
        topic: "Frontend",
        children: [
          { id: "react", topic: "React" },
          { id: "vue", topic: "Vue" },
          { id: "svelte", topic: "Svelte" },
          { id: "css", topic: "CSS / Tailwind" },
        ],
      },
      {
        id: "backend",
        topic: "Backend",
        children: [
          { id: "node", topic: "Node.js" },
          { id: "go", topic: "Go" },
          { id: "python", topic: "Python" },
          { id: "db", topic: "Postgres" },
        ],
      },
      {
        id: "ops",
        topic: "Ops",
        children: [
          { id: "ci", topic: "CI / CD" },
          { id: "k8s", topic: "Kubernetes" },
          { id: "obs", topic: "Observability" },
        ],
      },
      {
        id: "product",
        topic: "Product",
        children: [
          { id: "research", topic: "Research" },
          { id: "roadmap", topic: "Roadmap" },
          { id: "metrics", topic: "Metrics" },
        ],
      },
    ],
  },
};

export function CompactMindMapExample() {
  const [compact, setCompact] = useState(true);

  return (
    <div className="h-[400px] w-full rounded-lg border bg-background overflow-hidden relative">
      <MindMap data={denseData} readonly compact={compact}>
        <MindMapControls showExport={false} />
      </MindMap>
      <div className="absolute top-3 left-3 z-10 rounded-md bg-background/95 backdrop-blur-md border border-border/50 shadow-lg p-3">
        <p className="text-xs text-muted-foreground mb-2">Layout density</p>
        <div className="flex gap-2">
          <Button
            variant={compact ? "default" : "secondary"}
            size="sm"
            onClick={() => setCompact(true)}
            className="text-xs"
          >
            Compact
          </Button>
          <Button
            variant={!compact ? "default" : "secondary"}
            size="sm"
            onClick={() => setCompact(false)}
            className="text-xs"
          >
            Comfortable
          </Button>
        </div>
      </div>
    </div>
  );
}
