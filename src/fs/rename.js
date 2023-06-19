import * as fsp from "fs/promises";
import * as fs from 'fs'
import * as path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const files = path.join(__dirname, "files");


const errorText = 'FS operation failed!';
const getError = () => { throw new Error(errorText) }

const rename = async () => {
        const nameFrom = path.join(files, 'wrongFilename.txt');
        const nameTo = path.join(files, 'properFilename.md');
        try {
          if(fs.existsSync(nameTo)) throw new Error();
          fsp.rename(nameFrom, nameTo)
        } catch (error) {
            getError()
        }
    };

await rename();