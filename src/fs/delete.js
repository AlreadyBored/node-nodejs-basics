import {useFSVariables} from "./utils.js";
import fs from "node:fs/promises";
import path from "node:path";

const remove = async () => {
  try {
    const { __dirname } = useFSVariables();
    const filePath = path.resolve(__dirname, 'files', 'fileToRemove.txt');
    await fs.unlink(filePath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();
