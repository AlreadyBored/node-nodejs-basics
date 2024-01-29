import { createReadStream } from "fs";

const read = async () => {
  const filePath = "src/streams/files/fileToRead.txt";
  const fileStream = createReadStream(filePath, { encoding: 'utf8' });
  fileStream.pipe(process.stdout);
  return new Promise((resolve, reject) => {
    fileStream.on('error', (error) => {
      reject(error);
    });
    fileStream.on('end', () => {
      resolve();
    });
  });
};

await read();