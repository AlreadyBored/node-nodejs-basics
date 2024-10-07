import { pipeline } from 'node:stream/promises'
import { stdout } from "node:process";
import {createReadStream} from 'node:fs';
import path from "node:path";
import {fileURLToPath} from "node:url";

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.resolve(__dirname, 'files', 'fileToRead.txt');
  const readStream = createReadStream(filePath);
  await pipeline(readStream, stdout);
};

await read();
