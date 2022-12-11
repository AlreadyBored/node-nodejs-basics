import path from "path";
import { writeFile } from "fs/promises";
import { fileURLToPath } from "url";

const content = "I am fresh and young";

const dirname = fileURLToPath(new URL(".", import.meta.url));
const fileName = path.resolve(dirname, "./files", "fresh.txt");

const create = async () => {
  try {
    await writeFile(fileName, content, { flag: "wx" });
  } catch (error) {
    console.log("FS operation failed");
    throw new Error(error);
  }
};

await create();
