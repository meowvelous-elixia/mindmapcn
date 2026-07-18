import {
  DocsCode,
  DocsLayout,
  DocsLink,
  DocsNote,
  DocsSection,
} from "../_components/docs";
import { CodeBlock } from "../_components/code-block";
import { InstallCodeBlock } from "../_components/install-code-block";
import { Metadata } from "next";
import { MindMap, MindMapControls } from "@/registry/mindmap";

const siteUrl = "https://mindmapcn.vercel.app";

const installCode = `npx shadcn@latest add ${siteUrl}/mindmaps/mindmap.json`;

const usageCode = `"use client";

import { MindMap, MindMapControls } from "@/components/ui/mindmap";
import type { MindElixirData } from "mind-elixir";

const data: MindElixirData = {
  nodeData: {
    id: "root",
    topic: "Mind Map",
    children: [
      { id: "a", topic: "Topic A" },
      { id: "b", topic: "Topic B" },
    ],
  },
};

export function MyMindMap() {
  return (
    // Give the container an explicit height — the map fills 100% of its parent.
    <div className="h-[500px] w-full border rounded-lg overflow-hidden relative">
      <MindMap data={data} readonly>
        <MindMapControls />
      </MindMap>
    </div>
  );
}`;

export const metadata: Metadata = {
  title: "Installation",
};

export default function InstallationPage() {
  return (
    <DocsLayout
      title="Installation"
      description="How to install and set up mindmapcn in your project."
      prev={{ title: "Introduction", href: "/docs" }}
      next={{ title: "Usage", href: "/docs/usage" }}
    >
      <DocsSection title="Prerequisites">
        <p>
          A project with{" "}
          <DocsLink href="https://tailwindcss.com" external>
            Tailwind CSS
          </DocsLink>{" "}
          and{" "}
          <DocsLink href="https://ui.shadcn.com" external>
            shadcn/ui
          </DocsLink>{" "}
          set up.
        </p>
      </DocsSection>

      <DocsSection title="Installation">
        <p>Run the following command to add the mind map component:</p>
        <InstallCodeBlock command={installCode} showPrompt={false} />
        <p>
          This will install <DocsCode>mind-elixir</DocsCode> (and related
          dependencies) and add the component to{" "}
          <DocsCode>components/ui/mindmap.tsx</DocsCode> by default.
        </p>
      </DocsSection>

      <DocsSection title="Usage">
        <p>
          Import from the installed path and wrap the map in a container with an{" "}
          <strong className="text-foreground">explicit height</strong>. The map
          uses <DocsCode>h-full</DocsCode> / <DocsCode>w-full</DocsCode>, so a
          parent without height will collapse to a blank area.
        </p>
        <p>
          In the Next.js App Router, mark the file with{" "}
          <DocsCode>&quot;use client&quot;</DocsCode> — the component uses browser
          APIs.
        </p>
        <CodeBlock code={usageCode} />
        <div className="h-[300px] w-full border rounded-lg overflow-hidden relative bg-background">
          <MindMap fit={true}>
            <MindMapControls />
          </MindMap>
        </div>
      </DocsSection>

      <DocsNote>
        <strong>Note:</strong> The mind map uses <code>oklch</code> colors for
        accessibility and theme support. It automatically switches between light
        and dark themes.
      </DocsNote>
    </DocsLayout>
  );
}
