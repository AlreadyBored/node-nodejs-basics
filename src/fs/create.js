import fs from 'fs'
import path from 'path'
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url))

const create = async () => {
  const filePath = path.join(__dirname, 'files', 'fresh.txt');

  if(fs.existsSync(filePath)) {
    throw new Error('FS operation failed')
  }
  fs.writeFile(filePath, 'I am fresh and young', (err) => {
      if(err) {
        throw new Error('Create file error')
      }
    })
};

await create();

// create.js - implement function that creates new file fresh.txt with content I am fresh and young inside of the files folder 
// (if file already exists Error with message FS operation failed must be thrown)