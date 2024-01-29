import * as fs from 'fs';
import * as fsp from "fs/promises";
import * as zlib from 'zlib';
import * as path from "path";
import { fileURLToPath } from "url";
import {pipeline} from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToPress = path.join(__dirname, 'files', 'fileToCompress.txt');
const pressedFile = path.join(__dirname, 'files', 'archive.gz');


const compress = async () => {
    // Write your code here 
    const readStream = fs.createReadStream(fileToPress, 'utf-8');
    const writeStream = fs.createWriteStream(pressedFile);
    const gzip = zlib.createGzip();
    pipeline(readStream, gzip, writeStream, (err) => {
      console.error(err);
    }).on('close', () => fsp.rm(fileToPress))
};

await compress();