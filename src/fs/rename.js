import fs from 'fs'
import path from 'path'
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url))

const rename = async () => {
  const wrongFilePath = path.join(__dirname, 'files', 'wrongFilename.txt');
  const properFilePath = path.join(__dirname, 'files', 'properFilename.md');
  
  fs.access(properFilePath, (err) => {
    if(err) {
      fs.access(wrongFilePath, (err) => {
        if(err) throw new Error('FS operation failed')

        fs.rename(wrongFilePath, properFilePath, (err) => {
          if(err) throw new Error('Rename error')
        })
      })
    } else throw new Error('FS operation failed')
  })
};

await rename();
