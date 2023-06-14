import * as fsp from "fs/promises";
import * as fs from 'fs'
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const files = path.join(__dirname, "files");

const errorMessage = 'FS operation failed';
const getFiled = () => { throw new Error(errorMessage) }
const removeFile = path.join(files, 'fileToRemove.txt');

const remove = async () => {
    // Write your code here 
    try {
      await fsp.rm(removeFile)
    } catch {
      getFiled();
    }
};

await remove();