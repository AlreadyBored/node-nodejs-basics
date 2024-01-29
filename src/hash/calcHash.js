import { createHash } from "crypto";
import { createReadStream } from "fs";

const calculateHash = async () => {
    const hash = createHash("sha256");
    const fileStream = createReadStream("./files/fileToCalculateHashFor.txt");
  
    fileStream.on('error', err => console.error('File Stream Error:', err));
    hash.on('error', err => console.error('Hash Stream Error:', err));
  
    fileStream.pipe(hash);
  
    const chunks = [];
    hash.on('data', chunk => chunks.push(chunk));
  
    hash.on('end', () => {
      const result = Buffer.concat(chunks).toString('hex');
      console.log(result);
    });
};

await calculateHash();
