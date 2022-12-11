import path from "path";
import { fileURLToPath } from "url";
import { rename as renameFs } from "node:fs/promises";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const wrongFilePath = path.resolve(__dirname, "./files", "wrongFileName.txt");
const properFilePath = path.resolve(__dirname, "./files", "properFilename.md");

const rename = async () => {
  try {
    renameFs(wrongFilePath, properFilePath);
  } catch (error) {
    console.log(error);
    throw new Error("FS operation failed");
  }
};

await rename();
