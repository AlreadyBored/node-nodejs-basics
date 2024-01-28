import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";

const read = async () => {
  const filePath = path.join(path.dirname(fileURLToPath(import.meta.url)), '/files/fileToRead.txt');
  let string = "";

  const stream = fs.createReadStream(filePath, {encoding: 'utf8'});
  stream.on('data', data => {
    string += data
  });

  stream.on('end', () => {
    process.stdout.write(string + '\n')
  })
};

await read();
