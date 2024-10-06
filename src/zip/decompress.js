import fs from 'fs';
import { createGunzip } from 'zlib';

const decompress = async () => {
  const unzip = createGunzip();
  const source = fs.createReadStream('files/archive.gz');
  const destination = fs.createWriteStream('files/fileToCompress.txt');

  source.pipe(unzip).pipe(destination);
};

await decompress();
