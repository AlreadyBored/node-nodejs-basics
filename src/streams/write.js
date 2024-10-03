import { createWriteStream } from 'fs';
import { getFilesFolderPath } from "../utils.js";

const write = async () => {
  const fileName = 'fileToWrite.txt';
  const filePath = `${getFilesFolderPath('streams')}/${fileName}`;

  const writeStream = createWriteStream(filePath);

  process.stdin.on('data', (data) => writeStream.write(data));
};

await write();