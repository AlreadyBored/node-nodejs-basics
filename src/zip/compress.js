import fs from 'fs';
import path from 'path';
import zlib from 'node:zlib';

const compress = async () => {
  const basedir = path.join(
    path.dirname(new URL(import.meta.url).pathname),
    'files'
  );
  const sourceFilePath = path.join(basedir, 'fileToCompress.txt');
  const destinationFilePath = path.join(basedir, 'archive.gz');

  const gzip = zlib.createGzip();
  const sourceFileReadStream = fs.createReadStream(sourceFilePath);
  const destinationFileWriteStream = fs.createWriteStream(destinationFilePath);

  sourceFileReadStream.pipe(gzip).pipe(destinationFileWriteStream);

  destinationFileWriteStream.on('finish', () => {
    console.log('File has been compressed');
  });

  destinationFileWriteStream.on('error', (error) => {
    console.error('Failed to compress file:', error);
  });
};

await compress();
