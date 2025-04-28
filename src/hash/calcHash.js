import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { pipeline } from 'node:stream/promises';
import { Writable } from 'node:stream';

const calculateHash = async () => {
  const hash = createHash('sha256');
  
  const writable = new Writable({
    write(chunk, _, callback) {
      hash.update(chunk); 
      callback();
    }
  });
  
  await pipeline(
    createReadStream('src/hash/files/fileToCalculateHashFor.txt'),
    writable
  );

  console.log(hash.digest('hex'));
};

await calculateHash();
