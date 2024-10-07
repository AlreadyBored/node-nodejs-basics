import { createGzip } from 'node:zlib';
import path from 'node:path';
import { pipeline } from 'node:stream/promises'
import { createReadStream, createWriteStream } from 'node:fs';
import {fileURLToPath} from "node:url";

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const srcPath = path.resolve(__dirname, 'files', 'fileToCompress.txt');
  const destPath = path.resolve(__dirname, 'files', 'archive.gz');
  await pipeline(createReadStream(srcPath), createGzip(), createWriteStream(destPath))
};

await compress();
