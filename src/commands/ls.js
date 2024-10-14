import fs from "fs/promises";
import path from "path";

export const ls = async (process) => {
  const files = await fs.readdir(process.cwd());

  console.log("--------------------------------------------------");
  console.log("  Index | Name                       | Type");
  console.log("--------------------------------------------------");

  files.forEach(async (file, index) => {
    const filePath = path.join(process.cwd(), file);
    const stats = await fs.stat(filePath);
    const type = stats.isDirectory() ? "directory" : "file";

    console.log(
      `  ${index.toString().padEnd(5)} | ${file.padEnd(25)} | ${type}`
    );
  });
  console.log("--------------------------------------------------");
};
