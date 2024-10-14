import fs from "fs/promises";
import path from "path";

export const add = async (process, fileName) => {
  const fullPath = path.resolve(process.cwd(), fileName);

  await fs.writeFile(fullPath, "");
  console.log(`File '${fileName}' has been created.`);
};
