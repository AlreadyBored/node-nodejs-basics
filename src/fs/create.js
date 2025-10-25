import { writeFile, access, mkdir } from "fs/promises";
import path from "path";

const create = async () => {
  const dirPath = path.resolve("src", "fs", "files");
  const filePath = path.join(dirPath, "fresh.txt");
  try {
    await access(filePath);
    throw new Error("FS operation faileds");
  } catch (error) {
    if (error.code === "ENOENT") {
      await mkdir(dirPath, { recursive: true });
      await writeFile(filePath, "I am fresh and young");
    } else {
      throw error;
    }
  }
};

await create();
