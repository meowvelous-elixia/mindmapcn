"use client";

import { MindMap, MindMapControls } from "@/registry/mindmap";
import type { MindElixirData } from "mind-elixir";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const projectData: MindElixirData = {
  nodeData: {
    id: "root",
    topic: "Web App Development",
    children: [
      {
        id: "frontend",
        topic: "Frontend",
        children: [
          { id: "react", topic: "React" },
          { id: "nextjs", topic: "Next.js" },
        ],
      },
      {
        id: "backend",
        topic: "Backend",
        children: [
          { id: "nodejs", topic: "Node.js" },
          { id: "database", topic: "Database" },
        ],
      },
    ],
  },
};

export function DirectionMindMapExample() {
  const [direction, setDirection] = useState<0 | 1 | 2>(1);

  const directionLabels = {
    0: "Left",
    1: "Right",
    2: "Both Sides",
  };

  return (
    <div className="h-[400px] w-full rounded-lg border bg-background overflow-hidden relative">
      <MindMap data={projectData} direction={direction}>
        <MindMapControls />
      </MindMap>
      <div className="absolute top-3 left-3 z-10 rounded-md bg-background/95 backdrop-blur-md border border-border/50 shadow-lg p-3">
        <p className="text-xs text-muted-foreground mb-2">Layout Direction:</p>
        <div className="flex gap-2">
          {([0, 1, 2] as const).map((dir) => (
            <Button
              key={dir}
              variant={direction === dir ? "default" : "secondary"}
              size="sm"
              onClick={() => setDirection(dir)}
              className="text-xs"
            >
              {directionLabels[dir]}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
