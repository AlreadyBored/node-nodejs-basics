import fs from 'fs'
import path from 'path'
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url))

const remove = async () => {
  const fileToRemovePath = path.join(__dirname, 'files', 'fileToRemove.txt');

  fs.access(fileToRemovePath, (err) => {
    if (err) throw new Error('FS operation failed')

    fs.rm(fileToRemovePath, (err) => {
      if(err) throw new Error('Remove fail')
    })
  })
};

await remove();
