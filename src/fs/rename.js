import * as fsp from "fs/promises";
import * as fs from 'fs'
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const files = path.join(__dirname, "files");

const errorMessage = 'FS operation failed';
const getFiled = () => { throw new Error(errorMessage) }

const rename = async () => {
    // Write your code here 
    const nameFrom = path.join(files, 'wrongFilename.txt');
    const nameTo = path.join(files, 'properFilename.md');
    try {
      if(fs.existsSync(nameTo)) throw new Error();
      fsp.rename(nameFrom, nameTo)
    } catch (error) {
        getFiled()
    }
};

await rename();