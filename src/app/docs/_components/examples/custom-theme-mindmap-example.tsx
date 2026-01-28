"use client";

import { MindMap, MindMapControls } from "@/registry/mindmap";
import type { MindElixirData } from "mind-elixir";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

const themeData: MindElixirData = {
  nodeData: {
    id: "root",
    topic: "Theme Showcase",
    children: [
      {
        id: "light",
        topic: "Light Theme",
        children: [
          { id: "clean", topic: "Clean & Bright" },
          { id: "readable", topic: "Highly Readable" },
        ],
      },
      {
        id: "dark",
        topic: "Dark Theme",
        children: [
          { id: "modern", topic: "Modern Look" },
          { id: "eyefriendly", topic: "Eye-friendly" },
        ],
      },
    ],
  },
};

export function CustomThemeMindMapExample() {
  const [theme, setTheme] = useState<"light" | "dark" | undefined>(undefined);

  return (
    <div className="h-[400px] w-full rounded-lg border bg-background overflow-hidden relative">
      <MindMap data={themeData} theme={theme}>
        <MindMapControls />
      </MindMap>
      <div className="absolute top-3 left-3 z-10 rounded-md bg-background/95 backdrop-blur-md border border-border/50 shadow-lg p-3">
        <p className="text-xs text-muted-foreground mb-2">Force Theme:</p>
        <div className="flex gap-2">
          <Button
            variant={theme === "light" ? "default" : "secondary"}
            size="sm"
            onClick={() => setTheme("light")}
            className="text-xs"
          >
            <Sun className="h-3 w-3 mr-1" />
            Light
          </Button>
          <Button
            variant={theme === "dark" ? "default" : "secondary"}
            size="sm"
            onClick={() => setTheme("dark")}
            className="text-xs"
          >
            <Moon className="h-3 w-3 mr-1" />
            Dark
          </Button>
          <Button
            variant={theme === undefined ? "default" : "secondary"}
            size="sm"
            onClick={() => setTheme(undefined)}
            className="text-xs"
          >
            Auto
          </Button>
        </div>
      </div>
    </div>
  );
}
