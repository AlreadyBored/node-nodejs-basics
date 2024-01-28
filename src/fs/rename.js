import fs from 'fs'
import path from 'path'
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url))

const rename = async () => {
  const wrongFilePath = path.join(__dirname, 'files', 'wrongFilename.txt');
  const properFilePath = path.join(__dirname, 'files', 'properFilename.md');
  
  if(fs.existsSync(properFilePath) || !fs.existsSync(wrongFilePath)) {
    throw new Error('FS operation failed')
  }

  fs.rename(wrongFilePath, properFilePath, (err) => {
    if(err) throw new Error('Rename error')
  })
};

await rename();

// rename.js - implement function that renames file wrongFilename.txt to properFilename with extension .md 
// (if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS operation failed 
// must be thrown)