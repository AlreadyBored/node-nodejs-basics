import { stat, readFile } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";

export const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const pathFileForRead = __dirname + "/files/fileToRead.txt";

  try {
    await stat(pathFileForRead);
  } catch {
    throw new Error("FS operation failed");
  }

  const data = await readFile(pathFileForRead, { encoding: "utf8" });
  console.log(data);
};

await read();
