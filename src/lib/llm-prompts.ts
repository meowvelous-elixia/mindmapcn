export const siteUrl = "https://mindmapcn.mind-elixir.com";

export const mindmapInstallCommand = `npx shadcn@latest add ${siteUrl}/mindmaps/mindmap.json`;

export const mindmapInstallAgentPrompt = `Read the mindmapcn agent instructions at ${siteUrl}/llms.txt, then install mindmapcn in this project. Run ${mindmapInstallCommand}. Then add a basic example that imports MindMap and MindMapControls from "@/components/ui/mindmap", marks the file with "use client", and renders the map inside a container with an explicit height (for example h-[500px]). Prefer readonly for presentation or embedded maps. Preserve the existing Tailwind CSS and shadcn/ui setup. Do not manually rewrite the registry component unless the command fails; if it fails, inspect ${siteUrl}/mindmaps/mindmap.json and install the listed dependencies.`;
