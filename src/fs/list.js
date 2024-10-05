import {useFSVariables} from "./utils.js";
import fs from "node:fs/promises";
import path from "node:path";

const list = async () => {
  try {
    const { __dirname } = useFSVariables();
    const dirPath = path.resolve(__dirname, 'files');
    const files = await fs.readdir(dirPath, { withFileTypes: true, recursive: true });
    console.log(files.map(({ name }) => name))
  } catch {
    throw new Error('FS operation failed');
  }

};

await list();
