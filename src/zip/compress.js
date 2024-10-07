import { createGzip } from 'node:zlib';
import fs from 'node:fs';
import { join } from 'node:path';
import __dirname from './__dirname.js';

const fileTxt = join(__dirname, 'files', 'fileToCompress.txt');
const fileZg = join(__dirname, 'files', 'archive.gz');

const readableStream = fs.createReadStream(fileTxt, 'utf8');
const writeableStream = fs.createWriteStream(fileZg);

const gzip = createGzip();

const compress = async () => {
  readableStream.pipe(gzip).pipe(writeableStream);
};

await compress();
