import { writeFile, access } from "node:fs/promises";
import { join } from "node:path";

const create = async () => {
  const filePath = join(process.cwd(), "src", "fs", "files", "fresh.txt");

  try {
    // Check if file exists
    await access(filePath);
    throw new Error("FS operation failed");
  } catch (error) {
    if (error.code === "ENOENT") {
      // File doesn't exist, create
      try {
        await writeFile(filePath, "I am fresh and young");
      } catch (writeError) {
        throw new Error("FS operation failed");
      }
    } else {
      // other
      throw new Error("FS operation failed");
    }
  }
};

await create();
