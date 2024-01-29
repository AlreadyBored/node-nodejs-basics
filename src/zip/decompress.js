
import * as fs from 'fs';
import * as zlib from 'zlib';
import * as path from "path";
import { fileURLToPath } from "url";
import {pipeline} from 'stream';
import * as fsp from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToPress = path.join(__dirname, 'files', 'fileToCompress.txt');
const pressedFile = path.join(__dirname, 'files', 'archive.gz');

const decompress = async () => {
    // Write your code here 
    const readStream = fs.createReadStream(pressedFile);
    const writeStream = fs.createWriteStream(fileToPress);
    const gzip = zlib.createUnzip();
    pipeline(readStream, gzip, writeStream, (err) => {
      console.error(err);
    }).on('close', () => fsp.rm(pressedFile)); 
};

await decompress();

