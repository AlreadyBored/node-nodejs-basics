import { createHash } from 'crypto';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'fs';

export const calculateHash = async () => {
  const filename = fileURLToPath(import.meta.url);
  const currentPath = join(
    dirname(filename),
    'files/fileToCalculateHashFor.txt'
  );
  const hash = createHash('sha256');
  const fileToHash = createReadStream(currentPath);

  fileToHash.on('readable', () => {
    const chunk = fileToHash.read();
    chunk ? hash.update(chunk) : console.log(`${hash.digest('hex')}`);
  });
};

// calculateHash();
