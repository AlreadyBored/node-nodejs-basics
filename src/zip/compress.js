import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import zlib from 'zlib';

const compress = async () => {
  const currenDir = fileURLToPath(import.meta.url);
  const srcFile = path.join(path.dirname(currenDir), 'files', 'fileToCompress.txt');
  const destFile = path.join(path.dirname(currenDir), 'files', 'archive.gz');
  fs.createReadStream(srcFile).pipe(zlib.createGzip()).pipe(fs.createWriteStream(destFile));
};

await compress();
