import zlib from 'zlib';
import fs from 'fs';

const decompress = async () => {
  const gzip = zlib.createUnzip();
  const readedFile = fs.createReadStream('src/zip/files/archive.gz');
  const writedArchive = fs.createWriteStream('src/zip/files/fileToCompress.txt');

  readedFile.pipe(gzip).pipe(writedArchive);  
};

await decompress();