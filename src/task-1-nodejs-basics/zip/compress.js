import path from 'node:path';
import fs from 'node:fs';
import zlib from 'node:zlib';

const FILE_TO_COMPRESS = 'fileToCompress.txt';
const currentDirectory = process.cwd();
const filePath = path.join(currentDirectory, '/files', FILE_TO_COMPRESS);
const archive = path.join(currentDirectory, '/files', 'archive.gz');

const compress = () => {
  let resource = fs.createReadStream(filePath);
  let destination = fs.createWriteStream(archive);
  let compress = zlib.createGzip();
  resource.pipe(compress).pipe(destination);
};

compress();
