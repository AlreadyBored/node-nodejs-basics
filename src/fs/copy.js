import fs from 'fs'
import path from 'path'
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url))

const copy = async () => {
  const filesPath = path.join(__dirname, 'files');
  const filesCopyPath = path.join(__dirname, 'files_copy');

  fs.access(filesCopyPath, (err) => {
    if(err) {
      fs.access(filesPath, (err) => {
        if(err) throw new Error('FS operation failed')

        fs.mkdir(filesCopyPath, (err) => {
          if (err) throw new Error('Create folder error')

          fs.readdir(filesPath, (err, files) => {
            if (err) throw new Error('Read folder files error')

            files.forEach((file) => {
              const srcPath = path.join(filesPath, file)
              const dstPath = path.join(filesCopyPath, file)

              fs.copyFile(srcPath, dstPath, (err) => {
                if (err) throw new Error('Copy file error')
              })
            })
          })
        })
      })
    } else throw new Error('FS operation failed')
  })
};

await copy();
