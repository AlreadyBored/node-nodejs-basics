import {createGunzip} from 'zlib';
import fs from "fs";
import {dirname} from "path";
import {fileURLToPath} from "url";

const decompress = async () => {
  try {
    const dir = dirname(fileURLToPath(import.meta.url));
    const source = fs.createReadStream(`${dir}/files/archive.gz`);
    const destination = fs.createWriteStream(`${dir}/files/fileToCompress.txt`);

    source.pipe(createGunzip()).pipe(destination);
  }
  catch (err) {
    console.error('An error occurred:', err);
  }
};

await decompress();
