import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { stdout } from 'node:process';
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const filePath = join(__dirname, "files", "fileToCalculateHashFor.txt");

  return new Promise((resolve, reject) => {
    const input = createReadStream(filePath);
    const hash = createHash("sha256");
    
    input.on('error', (err) => {
      reject(err);
    });
    
    input.pipe(hash).setEncoding("hex").pipe(stdout);
    
    input.on('end', () => {
      stdout.write('\n');
      resolve();
    });
  });
};


await calculateHash();
