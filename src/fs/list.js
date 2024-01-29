import fs from 'fs'
import path from 'path'
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url))

const list = async () => {
  const filesPath = path.join(__dirname, 'files');

  fs.access(filesPath, (err) => {
    if (err) throw new Error('FS operation failed')

    fs.readdir(filesPath, (err, files) => {
      if(err) throw new Error('Read folder files error')

      files.forEach((file) => {
        console.log(file)
      })
    })
  })
}

await list();
