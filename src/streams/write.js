import {dirname} from "path";
import {fileURLToPath} from "url";
import fs from "fs";

const write = async () => {
  const dir = dirname(fileURLToPath(import.meta.url));
  const writeStream = fs.createWriteStream(`${dir}/files/fileToWrite.txt`, {encoding: 'utf-8'});
  process.stdin.pipe(writeStream);
};

await write();
