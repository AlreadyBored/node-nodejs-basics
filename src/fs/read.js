import path from "path";
import { existsSync } from "fs";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const read = async () => {
  const filePath = path.resolve(__dirname, "./files", "fileToRead.txt");

  try {
    if (!existsSync(filePath)) {
      throw new Error("FS operation failed");
    }
    const data = await readFile(filePath);
    console.log(data.toString());
  } catch (error) {
    console.log(error);
  }
};

await read();
