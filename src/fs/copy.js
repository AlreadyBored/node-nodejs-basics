import { readdir, mkdir, copyFile } from "node:fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const copy = async () => {
  const sourse = __dirname + "/files";
  const destination = __dirname + "/files_copy";

  try{
    await mkdir(destination);
    const dirFiles = await readdir(sourse);

    await Promise.all(dirFiles.map(file => copyFile(`${sourse}/${file}`, `${destination}/${file}`)));

  } catch(e){
    throw new Error('FS operation failed: ' + e.message);
  }
  
};

copy();