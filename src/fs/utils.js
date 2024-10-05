import {fileURLToPath} from "node:url";
import path from "node:path";

export const useFSVariables = () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return { __filename, __dirname };
}
