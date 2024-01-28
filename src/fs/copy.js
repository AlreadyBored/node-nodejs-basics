import fs from 'fs'
import path from 'path'
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url))

const copy = async () => {
  const filesPath = path.join(__dirname, 'files');
  const filesCopyPath = path.join(__dirname, 'files_copy');

  if(fs.existsSync(filesCopyPath) || !fs.existsSync(filesPath)) {
    throw new Error('FS operation failed')
  }

  fs.mkdir(filesCopyPath, (err) => {
    if(err) throw new Error('Create folder error')

    fs.readdir(filesPath, (err, files) => {
      if(err) throw new Error('Read folder files error')

      files.forEach((file) => {
        const srcPath = path.join(filesPath, file)
        const dstPath = path.join(filesCopyPath, file)

        fs.copyFile(srcPath, dstPath, (err) => {
          if(err) throw new Error('Copy file error')
        })
      })
    })
  })
};

await copy();

// copy.js - implement function that copies folder files files with all its content into folder files_copy at the same 
// level (if files folder doesn't exists or files_copy has already been created Error with message FS operation failed 
// must be thrown)