import fs from 'fs/promises';
import path from 'path';
import url from 'url'

const copy = async () => {
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const dir = path.join(__dirname, 'files');
    const copyDir = path.join(__dirname, 'files_copy')

    try {
        const files = await fs.readdir(dir, {withFileTypes: true});
        await fs.mkdir(copyDir);
        for(let file of files){
            try {
                await fs.copyFile(
                  path.join(__dirname, 'files', file.name),
                  path.join(__dirname, 'files_copy', file.name)
                );
              } catch (err) {
                console.log(`The file ${path.join(__dirname, 'files', file.name)} could not be copied`);
              }
        }
      } catch (err) {
        if (err.code === 'ENOENT' || err.code === 'EEXIST') {
            throw new Error('FS operation failed');
        }
      }
};

await copy();
