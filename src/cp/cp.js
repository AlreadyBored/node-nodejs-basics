import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const spawnChildProcess = async (args) => {
  // Write your code here

  const filePath = path.join(__dirname, "files", "script.js");
};

spawnChildProcess();
