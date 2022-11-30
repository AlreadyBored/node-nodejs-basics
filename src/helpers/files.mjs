import path from "node:path";
import { fileURLToPath } from "node:url";
import { access, constants } from "node:fs/promises";

async function isExist(path) {
  try {
    await access(path, constants.R_OK);
    return true;
  } catch {
    return false;
  }
}

function getDirName (moduleUrl) {
  const __filename = fileURLToPath(moduleUrl);
  return path.dirname(__filename);
}


export { isExist, getDirName };
