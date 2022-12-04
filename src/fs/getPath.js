import { dirname, join } from "path";
import { fileURLToPath } from "url";

export const getPath = (url, filename) => {
  const __filename = fileURLToPath(url);
  const __dirname = dirname(__filename);
  const filePath = join(__dirname, "files", filename);
  return filePath;
};