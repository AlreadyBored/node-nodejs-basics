import fs from 'fs'
import path from 'path'
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url))

const read = async () => {
  const fileToReadPath = path.join(__dirname, 'files', 'fileToRead.txt');

  fs.access(fileToReadPath, (err) => {
    if (err) throw new Error('FS operation failed')

    fs.readFile(fileToReadPath, {encoding: 'utf-8' }, (err, data) => {
      if(err) throw new Error('Read failed')

      console.log(data)
    })
  })
};

await read();

// read.js - implement function that prints content of the fileToRead.txt into console 
// (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)