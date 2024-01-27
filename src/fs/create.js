import { writeFile, access } from "fs/promises";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const filename = fileURLToPath(import.meta.url);

const create = async () => {
  const filePath = join(dirname(filename), "files", "fresh.txt");

  try {
    await access(filePath);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      await writeFile(filePath, "I am fresh and young");
    } else {
      throw err;
    }
  }
};

await create();
