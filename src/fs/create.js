import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const fileName = fileURLToPath(import.meta.url);
const dirName = dirname(fileName);

const create = async () => {
  try {
    await writeFile(`${dirName}/files/fresh.txt`, "I am fresh and young", {
      flag: "wx",
    });
  } catch {
    throw new Error("FS operation failed");
  }
};

await create();