"use client";

import { MindMap, MindMapControls } from "@/registry/mindmap";
import type { MindElixirData } from "mind-elixir";
import { useState } from "react";

const initialData: MindElixirData = {
  nodeData: {
    id: "root",
    topic: "My Project",
    children: [
      {
        id: "sub1",
        topic: "Planning",
      },
      {
        id: "sub2",
        topic: "Development",
      },
    ],
  },
};

export function OnChangeMindMapExample() {
  const [data, setData] = useState<MindElixirData>(initialData);
  const [operationCount, setOperationCount] = useState(0);
  const [recentOperations, setRecentOperations] = useState<string[]>([]);

  return (
    <div className="h-[400px] w-full rounded-lg border bg-background overflow-hidden relative">
      <MindMap
        data={data}
        onChange={(newData, operation) => {
          setData(newData);
          setOperationCount((prev) => prev + 1);
          // Extract operation name from the operation object
          if (operation && typeof operation === "object" && "name" in operation) {
            const opName = operation.name as string;
            setRecentOperations((prev) => [opName, ...prev].slice(0, 2));
          }
        }}
      >
        <MindMapControls />
      </MindMap>
      <div className="absolute bottom-3 left-3 z-10 rounded-md bg-background/95 backdrop-blur-md border border-border/50 shadow-lg p-3 max-w-[240px]">
        <p className="text-sm text-muted-foreground mb-1">
          Operations: <span className="font-mono font-semibold text-foreground">{operationCount}</span>
        </p>
        {recentOperations.length > 0 && (
          <div className="text-xs text-muted-foreground mb-1 space-y-0.5">
            {recentOperations.map((op, index) => (
              <p key={index}>
                {index === 0 ? "Last" : "Prev"}: <span className="font-mono text-foreground">{op}</span>
              </p>
            ))}
          </div>
        )}
        <p className="text-xs text-muted-foreground">
          Try adding, editing, or deleting nodes
        </p>
      </div>
    </div>
  );
}
