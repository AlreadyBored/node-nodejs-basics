import { createHash } from 'node:crypto';
import fs from "fs/promises";
import {dirname} from "path";
import {fileURLToPath} from "url";

const calculateHash = async () => {
  const dir = dirname(fileURLToPath(import.meta.url))

  const buffer = await fs.readFile(`${dir}/files/fileToCalculateHashFor.txt`)
  console.log(createHash('sha256').update(buffer).digest('hex'))
};

await calculateHash();
