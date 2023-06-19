import fs from 'fs'
import {dirname} from "path";
import {fileURLToPath} from "url";

const copy = async () => {
  const dir = dirname(fileURLToPath(import.meta.url));

  try {
    const names = fs.readdirSync(`${dir}/files`);
    fs.mkdir(`${dir}/files_copy`, (err)=> {
      if(err) {
        throw new Error('FS operation failed')
      }
    });
    names.forEach((name)=> {
      fs.copyFileSync(`${dir}/files/${name}`, `${dir}/files_copy/${name}`)
    });
  }
  catch (err) {
    throw new Error('FS operation failed');
  }
};

await copy();
