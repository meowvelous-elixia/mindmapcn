"use client";

import { MindMap, MindMapControls } from "@/registry/mindmap";
import type { MindElixirData, NodeObj } from "mind-elixir";
import { useState } from "react";

const knowledgeData: MindElixirData = {
  nodeData: {
    id: "root",
    topic: "Learning Path",
    children: [
      {
        id: "fundamentals",
        topic: "Fundamentals",
        children: [
          { id: "html", topic: "HTML" },
          { id: "css", topic: "CSS" },
          { id: "js", topic: "JavaScript" },
        ],
      },
      {
        id: "frameworks",
        topic: "Frameworks",
        children: [
          { id: "react", topic: "React" },
          { id: "vue", topic: "Vue" },
          { id: "angular", topic: "Angular" },
        ],
      },
      {
        id: "tools",
        topic: "Development Tools",
        children: [
          { id: "git", topic: "Git" },
          { id: "vscode", topic: "VS Code" },
          { id: "terminal", topic: "Terminal" },
        ],
      },
    ],
  },
};

export function SelectNodesMindMapExample() {
  const [selectedNodes, setSelectedNodes] = useState<NodeObj[]>([]);

  return (
    <div className="h-[400px] w-full rounded-lg border bg-background overflow-hidden relative">
      <MindMap
        data={knowledgeData}
        onSelectNodes={(nodes) => setSelectedNodes(nodes)}
      >
        <MindMapControls />
      </MindMap>
      <div className="absolute bottom-3 left-3 z-10 rounded-md bg-background/95 backdrop-blur-md border border-border/50 shadow-lg p-3 max-w-[280px]">
        <p className="text-xs text-muted-foreground mb-2">
          Selected Nodes: <span className="font-mono font-semibold text-foreground">{selectedNodes.length}</span>
        </p>
        {selectedNodes.length > 0 && (
          <div className="space-y-1">
            {selectedNodes.slice(0, 3).map((node, index) => (
              <p key={index} className="text-xs text-foreground font-mono truncate">
                • {node.topic}
              </p>
            ))}
            {selectedNodes.length > 3 && (
              <p className="text-xs text-muted-foreground">
                +{selectedNodes.length - 3} more...
              </p>
            )}
          </div>
        )}
        <p className="text-xs text-muted-foreground mt-2">
          💡 Ctrl/Cmd + Click to select multiple nodes
        </p>
      </div>
    </div>
  );
}
