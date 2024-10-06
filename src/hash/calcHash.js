import { createHash } from 'crypto';
import { createReadStream } from 'fs';

const calculateHash = async () => {
    const getHash = path => new Promise((resolve, reject) => {
        const hash = createHash('sha256');
        const rs = createReadStream(path);
        rs.on('error', reject);
        rs.on('data', chunk => hash.update(chunk));
        rs.on('end', () => resolve(hash.digest('hex')));
       })
       
       try {
        const hashValue = await getHash('src/hash/files/fileToCalculateHashFor.txt');
        console.log(hashValue);
      } catch (error) {
        console.error('Error:', error);
      }
    };

await calculateHash();