"use client";

import { MindMap, MindMapControls } from "@/registry/mindmap";
import { ExampleCard } from "./example-card";
import { MindElixirData } from "mind-elixir";
import { useState } from "react";

const brainstormingData: MindElixirData = {
  nodeData: {
    id: "root",
    topic: "Mobile App Ideas",
    children: [
      {
        id: "productivity",
        topic: "Productivity",
        direction: 0,
        children: [
          { id: "task-manager", topic: "Smart Task Manager", icons: ["📝"] },
          { id: "time-tracker", topic: "Time Tracker", icons: ["⏱️"] },
          { id: "habit", topic: "Habit Builder", icons: ["🎯"] },
        ],
      },
      {
        id: "social",
        topic: "Social",
        direction: 0,
        children: [
          { id: "community", topic: "Community Platform", icons: ["👥"] },
          { id: "events", topic: "Event Finder", icons: ["🎉"] },
        ],
      },
      {
        id: "health",
        topic: "Health & Fitness",
        direction: 1,
        children: [
          { id: "workout", topic: "Workout Planner", icons: ["💪"] },
          { id: "nutrition", topic: "Nutrition Tracker", icons: ["🥗"] },
          { id: "meditation", topic: "Meditation Guide", icons: ["🧘"] },
        ],
      },
      {
        id: "education",
        topic: "Education",
        direction: 1,
        children: [
          { id: "language", topic: "Language Learning", icons: ["🗣️"] },
          { id: "coding", topic: "Coding Tutorials", icons: ["💻"] },
        ],
      },
    ],
  },
};

export function Brainstorming() {
  const [mindmapData, setMindmapData] = useState(brainstormingData);
  return (
    <ExampleCard
      label="Brainstorming"
      className="aspect-square"
      delay="delay-700"
    >
      <MindMap
        direction={1}
        className="h-full"
        data={mindmapData}
        onChange={(newData) => {
          console.log("数据已更新:", newData);
          setMindmapData(newData);
        }}
      >
        <MindMapControls position="top-right" showExport={false} />
      </MindMap>
    </ExampleCard>
  );
}
