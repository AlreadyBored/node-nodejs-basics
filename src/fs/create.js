import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  try {
    const filePath = path.join(__dirname, 'files', 'fresh.txt');
  await fs.writeFile(filePath, 'I am fresh and young',{flag:"wx"});}
  catch (e) {
    console.log(e);
    throw new Error("FS operation failed")

  }
};

await create();


