import fs from 'fs';
import {dirname} from "path";
import {fileURLToPath} from "url";

const read = async () => {
  const dir = dirname(fileURLToPath(import.meta.url));
  const readStream = fs.createReadStream(`${dir}/files/fileToRead.txt`, {encoding: 'utf-8'});
  readStream.pipe(process.stdout);
};

await read();
