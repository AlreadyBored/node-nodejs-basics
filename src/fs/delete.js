import { rm } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const filePath = path.resolve(__dirname, "./files", "fileToRemove.txt");

const remove = async () => {
  try {
    await rm(filePath);
  } catch (error) {
    console.log(error);
    throw new Error("FS operation failed");
  }
};

await remove();
