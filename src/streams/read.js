import fs from 'fs';

export const read = async () => {
  const filePath = new URL('./files/fileToRead.txt', import.meta.url);
  const stream = fs.createReadStream(filePath);
  stream.on('data', (chunk) => process.stdout.write(chunk));
};
console.log(read());
