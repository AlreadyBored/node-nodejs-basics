import * as fsp from 'fs/promises'
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const file = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
  try {
    await fsp.writeFile(file, 'I am fresh and young', {flag: 'wx'});
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await create();