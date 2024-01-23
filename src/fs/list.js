import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  const folderPath = path.resolve(__dirname, './files/')

  if (!fs.existsSync(folderPath) || !fs.lstatSync(folderPath).isDirectory()) {
    throw new Error('FS operation failed');
  }

  const files = await new Promise(resolve => {
    fs.readdir(folderPath, (error, files) => {
      resolve(files);
    });
  });

  console.log(files);
}

await list();
