import { writeFile } from 'node:fs/promises';
import { Buffer } from 'node:buffer';
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import {isExists} from "../helpers/isExists.js";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const create = async () => {
  try {
    const path = join(__dirname, 'files', 'fresh.txt')
    const fileIsExist = await isExists(path)
    if (fileIsExist){
      throw new Error('FS operation failed')
    }
    const data = new Uint8Array(Buffer.from('I am fresh and young'));
    await writeFile(path, data);

  } catch (err) {
    // When a request is aborted - err is an AbortError
    console.error(err);
  }
};
console.log(__filename)

await create();