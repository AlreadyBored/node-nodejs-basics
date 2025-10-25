import path from 'node:path';
import fs from 'node:fs';
import zlib from 'node:zlib';

const FILE_TO_DECOMPRESS = 'archive.gz';
const currentDirectory = process.cwd();
const archive = path.join(currentDirectory, '/files', FILE_TO_DECOMPRESS);
const filePath = path.join(currentDirectory, '/files', 'fileToCompress.txt');

const decompress = () => {
  let resource = fs.createReadStream(archive);
  let destination = fs.createWriteStream(filePath);
  let compress = zlib.createGunzip();
  resource.pipe(compress).pipe(destination);
};

decompress();
