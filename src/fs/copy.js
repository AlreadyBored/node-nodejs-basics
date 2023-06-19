import url from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const source = path.join(__dirname, 'files');
const destination = path.join(__dirname, 'files_copy');

const copy = async () => {
  try {
    const isSrcExits = await checkFileExists(source);
    const isDestExists = await checkFileExists(destination);
    if (!isSrcExits || isDestExists) {
      throw new Error("Source doesn't exits or destination already exits");
    } else {
      fs.mkdir(destination);
      const files = await readFolder(source);
      for (const file of files) {
        await fs.copyFile(`${source}/${file}`, `${destination}/${file}`);
      }
    }
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

const checkFileExists = async (filePath) => {
  try {
    await fs.access(filePath);
    return true;
  } catch (err) {
    return false;
  }
};

const readFolder = async (folderPath) => {
  try {
    const files = await fs.readdir(folderPath);
    return files;
  } catch (err) {
    throw err;
  }
};

await copy();
