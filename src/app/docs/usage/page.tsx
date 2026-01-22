import { DocsLayout, DocsSection, DocsCode } from "../_components/docs";
import { ComponentPreview } from "../_components/component-preview";
import { BasicMindMapExample } from "../_components/examples/basic-mindmap-example";
import { OnChangeMindMapExample } from "../_components/examples/onchange-mindmap-example";
import { getExampleSource } from "@/lib/get-example-source";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Basic Usage",
};

export default function UsagePage() {
  const basicMindmapSource = getExampleSource("basic-mindmap-example.tsx");
  const onChangeMindmapSource = getExampleSource("onchange-mindmap-example.tsx");

  return (
    <DocsLayout
      title="Usage"
      description="The simplest way to add an interactive mind map to your application."
      prev={{ title: "Installation", href: "/docs/installation" }}
      next={{ title: "API Reference", href: "/docs/api-reference" }}
    >
      <DocsSection>
        <p>
          The <DocsCode>MindMap</DocsCode> component initializes the mind map canvas,
          handles theming, and provides context for child components.
        </p>
      </DocsSection>

      <ComponentPreview code={basicMindmapSource}>
        <BasicMindMapExample />
      </ComponentPreview>

      <DocsSection title="Handling Changes">
        <p>
          Use the <DocsCode>onChange</DocsCode> callback to respond to user interactions
          with the mind map. This callback receives the updated data whenever a node is
          added, edited, moved, or deleted.
        </p>
      </DocsSection>

      <ComponentPreview code={onChangeMindmapSource}>
        <OnChangeMindMapExample />
      </ComponentPreview>
    </DocsLayout>
  );
}
