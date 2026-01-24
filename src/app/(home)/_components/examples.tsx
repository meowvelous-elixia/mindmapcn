"use client";

import { OrganizationalChart } from "./organizational-chart";
import { ProjectPlanning } from "./project-planning";
import { KnowledgeGraph } from "./knowledge-graph";
import { Brainstorming } from "./brainstorming";
import { DecisionTree } from "./decision-tree";

export function Examples() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in delay-400 auto-rows-[22rem] lg:auto-rows-[20rem]">
      {/* Widget 1: Organizational Chart */}
      <OrganizationalChart className="sm:col-span-2 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3" />

      {/* Widget 2: Project Planning */}
      <ProjectPlanning className="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2" />

      {/* Widget 3: Knowledge Graph */}
      <KnowledgeGraph className="lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2" />

      {/* Widget 4: Brainstorming */}
      {/* <Brainstorming className="lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4" /> */}

      {/* Widget 5: Decision Tree */}
      <DecisionTree className="lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-3" />
    </div>
  );
}
