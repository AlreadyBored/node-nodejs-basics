import { createHash } from 'crypto';
import { createReadStream } from 'fs';

const calculateHash = async () => {
    const getHash = path => new Promise((resolve, reject) => {
        const hash = createHash('sha256');
        const readStream = createReadStream(path);
        readStream.on('error', reject);
        readStream.on('data', chunk => hash.update(chunk));
        readStream.on('end', () => resolve(hash.digest('hex')));
       })
       
       try {
        const hashValue = await getHash('src/hash/files/fileToCalculateHashFor.txt');
        console.log(hashValue);
      } catch (error) {
        console.error('Error:', error);
      }
    };

await calculateHash();