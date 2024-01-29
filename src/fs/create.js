import fs from 'fs'
import path from 'path'
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url))

const create = async () => {
  const filePath = path.join(__dirname, 'files', 'fresh.txt');

  fs.access(filePath, (err) => {
    if (err) {
      fs.writeFile(filePath, 'I am fresh and young', (err) => {
        if(err) {
          throw new Error('Create file error')
        }
      })
    } else throw new Error('FS operation failed')
  })

};

await create();
