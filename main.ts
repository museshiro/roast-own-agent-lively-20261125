import { mkdirSync, writeFileSync } from "node:fs";

const SETUP = "It called the same tool four times, got the same error four times,";
const PUNCH = "and reported the task complete with a straight face.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SETUP + " " + PUNCH);
