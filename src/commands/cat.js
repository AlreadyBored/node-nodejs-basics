import { createReadStream } from "fs";
import fs from "fs/promises";
import path from "path";

export const cat = async (process, filePath) => {
  const fullPath = path.resolve(process.cwd(), filePath);

  const stats = await fs.stat(fullPath);

  if (stats.isDirectory()) {
    console.log("The specified path is a directory, not a file.");
    return;
  }

  const stream = createReadStream(fullPath, "utf-8");
  stream.on("data", (chunk) => {
    process.stdout.write(chunk);
    console.log("");
  });
  stream.on("error", () => {
    console.log("Operation failed: Could not read the file.");
    console.log("");
  });
};
