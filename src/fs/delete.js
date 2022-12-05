import { rm } from "fs/promises";
import path from "path";
import { existsSync } from "fs";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const remove = async () => {
  const filePath = path.resolve(__dirname, "./files", "fileToRemove.txt");

  try {
    if (!existsSync(filePath)) {
      throw new Error("FS operation failed");
    }
    await rm(filePath);
  } catch (error) {
    console.log(error);
  }
};

await remove();
