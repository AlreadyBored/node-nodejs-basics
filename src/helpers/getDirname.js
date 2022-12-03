import path from "path";
import { fileURLToPath } from "url";

export const getDirname = (url) => {
  const __filename = fileURLToPath(url);
  const __dirname = path.dirname(__filename);
  console.log(__dirname);

  return __dirname;
};
