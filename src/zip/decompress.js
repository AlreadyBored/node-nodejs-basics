import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import zlib from 'zlib';
const decompress = async () => {
  const currenDir = fileURLToPath(import.meta.url);
  const srcFile = path.join(path.dirname(currenDir), 'files', 'archive.gz');
  const destFile = path.join(path.dirname(currenDir), 'files', 'fileToCompress.txt');
  fs.createReadStream(srcFile).pipe(zlib.createGunzip()).pipe(fs.createWriteStream(destFile));
};

await decompress();
