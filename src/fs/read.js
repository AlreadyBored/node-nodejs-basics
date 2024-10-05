import {useFSVariables} from "./utils.js";
import fs from "node:fs/promises";
import path from "node:path";

const read = async () => {
  try {
    const { __dirname } = useFSVariables();
    const filePath = path.resolve(__dirname, 'files', 'fileToRead.txt');
    const fileData = await fs.readFile(filePath, { encoding: 'utf8' });
    console.log(fileData);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();
