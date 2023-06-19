import { writeFile } from "node:fs/promises";
import path from "node:path";

import { exists } from "./exists.js";
import { FILES_DIR, DIRNAME } from "./config.js";

const TARGET_FILENAME = path.resolve(DIRNAME, FILES_DIR, "./fresh.txt");

const create = async () => {
  if (await exists(TARGET_FILENAME)) {
    throw new Error("FS operation failed");
  }

  await writeFile(TARGET_FILENAME, "I am fresh and young", {
    encoding: "utf-8",
  });
};

await create();
