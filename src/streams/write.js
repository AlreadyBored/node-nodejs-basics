import fs from 'fs';
import path from 'path';

const write = async () => {
  const __dirname = path.resolve();

  const ws = fs.createWriteStream(
    path.join(__dirname, 'files', 'fileToWrite.txt')
  );

  process.stdin.on('data', (data) => {
    ws.write(data);
    ws.end();
  });
};

await write();
