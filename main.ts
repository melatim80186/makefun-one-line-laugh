import { writeFileSync, mkdirSync } from "node:fs";

const LINE =
  "My bank app warns me I'm nearly broke, then shows me a 'treat yourself' ad, as if denial were a savings plan.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
