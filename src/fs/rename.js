import path from "path";
import { fileURLToPath } from "url";
import { rename as renameFs } from "node:fs/promises";
import { existsSync } from "fs";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const rename = async () => {
  const wrongFilePath = path.resolve(__dirname, "./files", "wrongFileName.txt");
  const properFilePath = path.resolve(
    __dirname,
    "./files",
    "properFilename.md"
  );

  try {
    if (!existsSync(wrongFilePath) || existsSync(properFilePath)) {
      throw new Error("FS operation failed");
    }
    renameFs(wrongFilePath, properFilePath);
  } catch (error) {
    console.log(error);
  }
};

await rename();
