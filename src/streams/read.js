import fs from 'fs';
import path from 'path';

const read = async () => {
  const __dirname = path.resolve();
  const rs = fs.createReadStream(
    path.join(__dirname, 'files', 'fileToRead.txt'),
    { encoding: 'utf-8' }
  );

  rs.on('data', (chunkData) => process.stdout.write(chunkData));
};

await read();
