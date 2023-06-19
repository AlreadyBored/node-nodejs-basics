import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { readdir, access, mkdir, copyFile } from 'fs';

const copy = async () => {
    const currentFile = fileURLToPath(import.meta.url);
    const currentDir = dirname(currentFile);
    const srcDir = join(currentDir, 'files');
    const targetDir = join(currentDir, 'files_copy');
    await access(targetDir, (err) => {
        if (!err) throw new Error('FS operation failed')
    })

    await mkdir(targetDir, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        }
    })

    readdir(srcDir, (err, files) => {
        if (err) {
            throw new Error('FS operation failed');
        }

        files.forEach(file => {
          const srcFilePath = join(srcDir, file);
          const targetFilePath = join(targetDir, file);
          copyFile(srcFilePath, targetFilePath, (err) => {
              if (err) {
                  console.log(err);
              }
          })
        })
    })
};

await copy();
