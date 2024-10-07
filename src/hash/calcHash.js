import { createHash } from 'node:crypto';
import {fileURLToPath} from "node:url";
import path from "node:path";
import {createReadStream} from "node:fs";

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.resolve(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const readStream = createReadStream(filePath);
  const hash = createHash('sha256');

  readStream.pipe(hash).on('finish', () => {
    console.log(hash.digest("hex"));
  })
};

await calculateHash();
