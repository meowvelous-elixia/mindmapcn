"use client";

import { MindMap, MindMapControls } from "@/registry/mindmap";
import type { MindElixirData } from "mind-elixir";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const multilingualData: MindElixirData = {
  nodeData: {
    id: "root",
    topic: "Multi-language Support",
    children: [
      {
        id: "english",
        topic: "English",
      },
      {
        id: "chinese",
        topic: "中文",
      },
      {
        id: "japanese",
        topic: "日本語",
      },
      {
        id: "portuguese",
        topic: "Português",
      },
    ],
  },
};

type LocaleType = "en" | "zh_CN" | "zh_TW" | "ja" | "pt";

export function LocaleMindMapExample() {
  const [locale, setLocale] = useState<LocaleType>("en");

  const locales: { value: LocaleType; label: string }[] = [
    { value: "en", label: "English" },
    { value: "zh_CN", label: "简体中文" },
    { value: "zh_TW", label: "繁體中文" },
    { value: "ja", label: "日本語" },
    { value: "pt", label: "Português" },
  ];

  return (
    <div className="h-[400px] w-full rounded-lg border bg-background overflow-hidden relative">
      <MindMap data={multilingualData} locale={locale}>
        <MindMapControls />
      </MindMap>
      <div className="absolute top-3 left-3 z-10 rounded-md bg-background/95 backdrop-blur-md border border-border/50 shadow-lg p-3">
        <p className="text-xs text-muted-foreground mb-2">Interface Language:</p>
        <div className="flex flex-wrap gap-1">
          {locales.map((loc) => (
            <Button
              key={loc.value}
              variant={locale === loc.value ? "default" : "secondary"}
              size="sm"
              onClick={() => setLocale(loc.value)}
              className="text-xs h-7"
            >
              {loc.label}
            </Button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          🌍 Right-click to see localized menus
        </p>
      </div>
    </div>
  );
}
