import path from "path";
import fs from "fs";
import {fileURLToPath} from "url";

const write = async () => {
  const filePath = path.join(path.dirname(fileURLToPath(import.meta.url)), '/files/fileToWrite.txt');
  const stream = fs.createWriteStream(filePath, {flags: 'a'});

  process.stdin.on('data', data => {
    stream.write(data);
    process.exit();
  });
};

await write();
