import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

export const fileExists = async (path) =>
  !!(await fs.stat(path).catch((e) => false));


export function getFilename(metaUrl) {
  const __filename = fileURLToPath(metaUrl);

  return __filename;
}

export function getDirName(metaUrl) {
  const __dirname = path.dirname(getFilename(metaUrl));

  return __dirname;
}
