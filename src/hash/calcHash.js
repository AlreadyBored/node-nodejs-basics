import path from "path";
import {fileURLToPath} from "url";
import fs from "fs";
import { createHash } from 'crypto';

const calculateHash = async () => {
  const filePath = path.join(path.dirname(fileURLToPath(import.meta.url)), '/files/fileToCalculateHashFor.txt');
  const hash = createHash('sha256')

  fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (err) {
      throw new Error('FS operation failed');
    } else {
      if (data) {
        hash.update(data);
        console.log(hash.digest('hex'));
      }
    }
  });
};

await calculateHash();
