import fs from "fs/promises";
import path from "path";

export const rn = async (process, filePath, newFileName) => {
  const fullPath = path.resolve(process.cwd(), filePath);
  const newFullPath = path.resolve(process.cwd(), newFileName);

  await fs.rename(fullPath, newFullPath);

  console.log(`File '${filePath}' has been renamed to '${newFileName}'.`);
};
