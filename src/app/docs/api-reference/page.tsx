import {
  DocsLayout,
  DocsSection,
  DocsCode,
  DocsLink,
  DocsPropTable,
} from "../_components/docs";
import { CodeBlock } from "../_components/code-block";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Reference",
};

const anatomyCode = `<MindMap data={initialData}>
  <MindMapControls />
</MindMap>`;

const useMindMapCode = `const { mind, isLoaded } = useMindMap();`;

export default function ApiReferencePage() {
  return (
    <DocsLayout
      title="API Reference"
      description="Complete reference for the MindMap component and its props."
      prev={{ title: "Data Structure", href: "/docs/data-structure" }}
    >
      <DocsSection title="Component Anatomy">
        <p>
          The standard way to use the MindMap component.
        </p>
        <CodeBlock code={anatomyCode} showCopyButton={false} />
      </DocsSection>

      {/* MindMap */}
      <DocsSection title="MindMap">
        <p>
          The root component that initializes the mind map instance.
          It handles data loading, theme management, and event listeners.
          Designed primarily for presentation; set{" "}
          <DocsCode>readonly</DocsCode> for view-only maps.
        </p>
        <DocsPropTable
          props={[
            {
              name: "data",
              type: "MindElixirData",
              description:
                "Map data. See the Data Structure page. Updates to this prop refresh the map content.",
            },
            {
              name: "direction",
              type: "0 | 1 | 2",
              default: "2",
              description:
                "Layout direction: 0 (Left), 1 (Right), 2 (Side/Both).",
            },
            {
              name: "contextMenu",
              type: "boolean",
              default: "true",
              description: "Enable right-click context menu.",
            },
            {
              name: "keypress",
              type: "boolean",
              default: "true",
              description: "Enable keyboard shortcuts (Enter, Tab, etc.).",
            },
            {
              name: "locale",
              type: '"en" | "zh_CN" | "zh_TW" | "ja" | "pt"',
              default: '"en"',
              description: "Language for built-in menus and prompts.",
            },
            {
              name: "overflowHidden",
              type: "boolean",
              default: "false",
              description: "Clip map content that overflows the container.",
            },
            {
              name: "theme",
              type: '"light" | "dark"',
              description:
                "Force a specific theme. If omitted, follows system/document theme.",
            },
            {
              name: "monochrome",
              type: "boolean",
              default: "false",
              description:
                "Use a single-color branch palette that matches the theme foreground.",
            },
            {
              name: "fit",
              type: "boolean",
              default: "true",
              description: "Automatically fit map to view on load.",
            },
            {
              name: "readonly",
              type: "boolean",
              default: "false",
              description:
                "Disable editing. Recommended for presentation / embedded maps.",
            },
            {
              name: "compact",
              type: "boolean",
              default: "false",
              description:
                "Tighter node spacing for dense presentation layouts.",
            },
            {
              name: "markdown",
              type: "(text: string, obj) => string",
              description:
                "Custom markdown parser. Topics are rendered as HTML through this function. Bring your own parser (e.g. marked) or a small custom one.",
            },
            {
              name: "imageProxy",
              type: "(url: string) => string",
              description:
                "Rewrite remote node image URLs so they can be captured when exporting the map. Only needed to avoid CORS failures during image generation — not for normal on-screen display.",
            },
            {
              name: "onChange",
              type: "(data: MindElixirData, operation: unknown) => void",
              description: "Callback when map data changes due to an operation.",
            },
            {
              name: "onOperation",
              type: "(operation: unknown) => void",
              description: "Callback for each Mind Elixir operation event.",
            },
            {
              name: "onSelectNodes",
              type: "(nodes: NodeObj[]) => void",
              description: "Callback when nodes are selected.",
            },
            {
              name: "loader",
              type: "ReactNode",
              description: "Custom loading indicator shown before the map is ready.",
            },
            {
              name: "className",
              type: "string",
              description: "Extra class names on the outer wrapper.",
            },
          ]}
        />
        <p>
          For the shape of <DocsCode>data</DocsCode>, see{" "}
          <DocsLink href="/docs/data-structure">Data Structure</DocsLink>.
        </p>
      </DocsSection>

      {/* useMindMap */}
      <DocsSection title="useMindMap">
        <p>
          A hook that provides access to the Mind Elixir instance.
          Must be used within a <DocsCode>MindMap</DocsCode> component.
        </p>
        <CodeBlock code={useMindMapCode} language="tsx" showCopyButton={false} />
        <p>
          Returns <DocsCode>mind</DocsCode> (
          <DocsCode>MindElixirInstance</DocsCode>) and{" "}
          <DocsCode>isLoaded</DocsCode> (boolean). For the full instance API
          (methods, events, data shape), see{" "}
          <DocsLink
            href="https://github.com/ssshooter/mind-elixir-core"
            external
          >
            Mind Elixir Core
          </DocsLink>
          .
        </p>
      </DocsSection>

      {/* MindMapControls */}
      <DocsSection title="MindMapControls">
        <p>
          Renders UI controls for the mind map (Zoom, Fit, Export, Fullscreen).
        </p>
        <DocsPropTable
          props={[
            {
              name: "position",
              type: '"top-left" | "top-right" | "bottom-left" | "bottom-right"',
              default: '"top-right"',
              description: "Position of the controls overlay.",
            },
            {
              name: "showZoom",
              type: "boolean",
              default: "true",
              description: "Show Zoom In/Out buttons.",
            },
            {
              name: "showFit",
              type: "boolean",
              default: "true",
              description: "Show Fit-to-Screen button.",
            },
            {
              name: "showExport",
              type: "boolean",
              default: "true",
              description: "Show Export button.",
            },
            {
              name: "onExport",
              type: "(file: Blob, filename: string) => void",
              description:
                "Called with the exported image blob and filename after export.",
            },
            {
              name: "className",
              type: "string",
              description: "Extra class names on the controls container.",
            },
          ]}
        />
      </DocsSection>
    </DocsLayout>
  );
}
