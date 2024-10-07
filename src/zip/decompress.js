import { createUnzip } from 'node:zlib';
import fs from 'node:fs';
import { join } from 'node:path';
import __dirname from './__dirname.js';

const fileTxt = join(__dirname, 'files', 'fileToCompress.txt');
const fileZg = join(__dirname, 'files', 'archive.gz');

const readableStream = fs.createReadStream(fileZg);
const writeableStream = fs.createWriteStream(fileTxt);

const unZip = createUnzip();

const decompress = async () => {
  readableStream.pipe(unZip).pipe(writeableStream);
};

await decompress();
