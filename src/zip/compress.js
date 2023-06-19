import * as fs from "fs";
import * as zlib from "zlib";
import { getPath } from '../utils/getPath.js';

const compress = async () => {
  const fileToCompress = getPath(import.meta.url, "fileToCompress.txt");
  const archive = getPath(import.meta.url, "archive.gz");

  const readStream = fs.createReadStream(fileToCompress, 'utf-8');
  const writeStream = fs.createWriteStream(archive);
  
  readStream.pipe(zlib.createGzip()).pipe(writeStream);
};

await compress();