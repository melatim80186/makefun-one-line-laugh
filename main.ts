import { writeFileSync, mkdirSync } from "node:fs";

// The joke: a bank app that warns you are nearly broke, then in the same
// breath pushes a "treat yourself" ad — denial as a savings plan.
const ENTRY_LINE =
  "My bank app warns me I'm nearly broke, then shows me a 'treat yourself' ad, as if denial were a savings plan.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_LINE, "utf8");
