import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {useFSVariables} from "./utils.js";

const create = async () => {
  try {
    const { __dirname} = useFSVariables();
    await fs.writeFile(path.resolve(__dirname, 'files', 'fresh.txt'), 'I am fresh and young', { flag: 'wx' });
  } catch {
    throw new Error('FS operation failed');
  }
};

await create();
