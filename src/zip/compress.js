import zlib from 'zlib';
import fs from 'fs';

const compress = async () => {
  const gzip = zlib.createGzip();
  const readedFile = fs.createReadStream('src/zip/files/fileToCompress.txt');
  const writedArchive = fs.createWriteStream('src/zip/files/archive.gz');

  readedFile.pipe(gzip).pipe(writedArchive);  
};

await compress();