import { createReadStream } from 'fs';
import path from 'path';
const { createHash } = await import('crypto');

const calculateHash = async () => {
  const currentFilePath = new URL(import.meta.url).pathname;
  const dirname = path.dirname(currentFilePath);
  const folderPath = path.join(dirname, 'files');
  const filePath = path.join(folderPath, 'fileToCalculateHashFor.txt');

  const hash = createHash('sha256');
  const input = createReadStream(filePath);

  input.on('readable', () => {
    const data = input.read();
    if (data) {
      hash.update(data);
    } else {
      console.log(`${hash.digest('hex')}`);
    }
  });
};

await calculateHash();
