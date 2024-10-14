import fs from "fs/promises";
import path from "path";

export const cd = async (process, directoryPath) => {
  if (!directoryPath) return console.log("Directory not provided");

  const targetPath = path.resolve(process.cwd(), directoryPath);
  const stats = await fs.stat(targetPath);

  if (stats.isDirectory()) {
    process.chdir(targetPath);
    console.log(`Changed directory to ${targetPath}`);
  } else {
    console.log("Directory does not exist.");
  }
};
