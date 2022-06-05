import fs from 'fs';
export const write = async () => {
  const filePath = new URL('./files/fileToWrite.txt', import.meta.url);
  const stream = fs.createWriteStream(filePath);
  process.stdin.on('data', (data) => {
    stream.write(data);
  });
  process.stdin.on('end', () => {
    stream.end();
  });
};
write();
