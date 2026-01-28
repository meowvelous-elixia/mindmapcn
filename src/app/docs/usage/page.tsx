import { DocsLayout, DocsSection, DocsCode } from "../_components/docs";
import { ComponentPreview } from "../_components/component-preview";
import { BasicMindMapExample } from "../_components/examples/basic-mindmap-example";
import { OnChangeMindMapExample } from "../_components/examples/onchange-mindmap-example";
import { ReadonlyMindMapExample } from "../_components/examples/readonly-mindmap-example";
import { DirectionMindMapExample } from "../_components/examples/direction-mindmap-example";
import { SelectNodesMindMapExample } from "../_components/examples/select-nodes-mindmap-example";
import { LocaleMindMapExample } from "../_components/examples/locale-mindmap-example";
import { CustomThemeMindMapExample } from "../_components/examples/custom-theme-mindmap-example";
import { getExampleSource } from "@/lib/get-example-source";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Basic Usage",
};

export default function UsagePage() {
  const basicMindmapSource = getExampleSource("basic-mindmap-example.tsx");
  const onChangeMindmapSource = getExampleSource("onchange-mindmap-example.tsx");
  const readonlyMindmapSource = getExampleSource("readonly-mindmap-example.tsx");
  const directionMindmapSource = getExampleSource("direction-mindmap-example.tsx");
  const selectNodesMindmapSource = getExampleSource("select-nodes-mindmap-example.tsx");
  const localeMindmapSource = getExampleSource("locale-mindmap-example.tsx");
  const customThemeMindmapSource = getExampleSource("custom-theme-mindmap-example.tsx");

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

      <DocsSection title="Readonly Mode">
        <p>
          Create a view-only mind map by disabling editing features. This is perfect
          for displaying organizational charts, knowledge bases, or any static content
          that shouldn&apos;t be modified by users.
        </p>
      </DocsSection>

      <ComponentPreview code={readonlyMindmapSource}>
        <ReadonlyMindMapExample />
      </ComponentPreview>

      <DocsSection title="Custom Layout Direction">
        <p>
          Control how the mind map branches expand by setting the{" "}
          <DocsCode>direction</DocsCode> prop. Choose between left (0), right (1), or
          both sides (2) to match your content structure and visual preferences.
        </p>
      </DocsSection>

      <ComponentPreview code={directionMindmapSource}>
        <DirectionMindMapExample />
      </ComponentPreview>

      <DocsSection title="Tracking Node Selection">
        <p>
          Use the <DocsCode>onSelectNodes</DocsCode> callback to respond to node
          selection events. This is useful for implementing custom actions, analytics,
          or synchronized views based on what users are focusing on.
        </p>
      </DocsSection>

      <ComponentPreview code={selectNodesMindmapSource}>
        <SelectNodesMindMapExample />
      </ComponentPreview>

      <DocsSection title="Localization">
        <p>
          The MindMap component supports multiple languages for its built-in menus and
          prompts. Set the <DocsCode>locale</DocsCode> prop to match your application&apos;s
          language or user preferences.
        </p>
      </DocsSection>

      <ComponentPreview code={localeMindmapSource}>
        <LocaleMindMapExample />
      </ComponentPreview>

      <DocsSection title="Theme Control">
        <p>
          By default, the mind map automatically adapts to your document&apos;s theme. You
          can override this behavior by explicitly setting the{" "}
          <DocsCode>theme</DocsCode> prop to force a specific appearance.
        </p>
      </DocsSection>

      <ComponentPreview code={customThemeMindmapSource}>
        <CustomThemeMindMapExample />
      </ComponentPreview>
    </DocsLayout>
  );
}
