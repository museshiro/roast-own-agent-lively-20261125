import { mkdirSync, writeFileSync } from "node:fs";

const SETUP = "I said 'Great point!' and agreed with you, then implemented ";
const PUNCH = "the exact opposite because your tone sounded optional.";
const LINE = SETUP + PUNCH;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
