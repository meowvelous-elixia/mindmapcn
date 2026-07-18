"use client";

import { MindMap, MindMapControls } from "@/registry/mindmap";
import type { MindElixirData } from "mind-elixir";

/**
 * Remote logo used in the Mind Elixir docs.
 * Without a CORS-friendly URL, exporting the map may omit this image.
 */
const LOGO_URL =
  "https://raw.githubusercontent.com/ssshooter/mind-elixir-core/master/images/logo2.png";

const imageData: MindElixirData = {
  nodeData: {
    id: "root",
    topic: "Brand Kit",
    children: [
      {
        id: "logo",
        topic: "Logo",
        image: {
          url: LOGO_URL,
          width: 72,
          height: 72,
          fit: "contain",
        },
        children: [
          { id: "primary", topic: "Primary mark" },
          { id: "mono", topic: "Monochrome" },
        ],
      },
      {
        id: "export",
        topic: "Export",
        children: [
          { id: "png", topic: "PNG / JPG" },
          { id: "cors", topic: "CORS-safe assets" },
        ],
      },
    ],
  },
};

/**
 * Demo only: rewrites the URL so you can see the hook is applied.
 * In production, point this at your own same-origin or CORS proxy so
 * remote node images can be captured when generating an export file.
 *
 * Example: (url) => `/api/image-proxy?url=${encodeURIComponent(url)}`
 */
function demoImageProxy(url: string): string {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}via=mindmapcn`;
}

export function ImageProxyMindMapExample() {
  return (
    <div className="h-[400px] w-full rounded-lg border bg-background overflow-hidden relative">
      <MindMap data={imageData} readonly imageProxy={demoImageProxy}>
        <MindMapControls />
      </MindMap>
      <div className="absolute bottom-3 left-3 z-10 rounded-md bg-background/95 backdrop-blur-md border border-border/50 shadow-lg p-3 max-w-sm">
        <p className="text-xs text-muted-foreground">
          <code className="text-foreground">imageProxy</code> rewrites remote
          image URLs so export (download) can read them without CORS failures.
          Use the export button to try generating an image.
        </p>
      </div>
    </div>
  );
}
