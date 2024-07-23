"use server";
import { promises as fs } from "fs";

import { Graph } from "@/components/graph";

export const GraphMain = async () => {
  const dot = await fs.readFile(process.cwd() + "/graph.gv", "utf-8");

  return (
    <main className="w-full">
      <Graph dot={dot} />
    </main>
  );
};
