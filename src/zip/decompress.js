import fs from 'fs';
import zlib from 'zlib';

export const decompress = async () => {
  const fileContents = fs.createReadStream('archive.gz');
  const writeStream = fs.createWriteStream('fileToCompress.txt');
  const unzip = zlib.createGunzip();
  fileContents.pipe(unzip).pipe(writeStream);
};
