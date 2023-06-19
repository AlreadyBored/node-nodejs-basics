import * as fsp from "fs/promises";
import * as fs from 'fs'
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const files = path.join(__dirname, "files");

const errorText = 'FS operation failed';
const getError = () => { throw new Error(errorText) }

const list = async () => {
    // Write your code here
    try {
      const dirnets = await fsp.readdir(files, { withFileTypes: true });
      for (const dirnet of dirnets) {
        console.log(dirnet.name)
      }
    } catch  {
        getError()
    }
};

await list();