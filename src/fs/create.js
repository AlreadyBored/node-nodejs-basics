import { writeFile } from "node:fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, "files", "fresh.txt");

const create = async () => {
  await writeFile(filePath, "I am fresh and young", { flag: "wx" }).catch((err) => {
    throw new Error("FS operation failed");
  });
};

await create();
