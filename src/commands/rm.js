import fs from "fs/promises";
import path from "path";

export const rm = async (process, filePath) => {
  const fullPath = path.resolve(process.cwd(), filePath);
  await fs.unlink(fullPath);
  console.log(`File '${filePath}' has been deleted.`);
};
