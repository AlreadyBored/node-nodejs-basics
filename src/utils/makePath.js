import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

export const makePath = (url, path) => {
  const __filename = fileURLToPath(url);
  const __dirname = dirname(__filename);
  return join(__dirname, path);
};
