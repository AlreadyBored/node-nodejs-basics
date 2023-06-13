import fs from 'fs';
import path from 'path';
import zlib from 'node:zlib';

const decompress = async () => {
  const basedir = path.join(
    path.dirname(new URL(import.meta.url).pathname),
    'files'
  );
  const sourceFilePath = path.join(basedir, 'archive.gz');
  const destinationFilePath = path.join(basedir, 'fileToCompress1.txt');

  const unzip = zlib.createUnzip();
  const sourceFileReadStream = fs.createReadStream(sourceFilePath);
  const destinationFileWriteStream = fs.createWriteStream(destinationFilePath);

  sourceFileReadStream.pipe(unzip).pipe(destinationFileWriteStream);

  destinationFileWriteStream.on('finish', () => {
    console.log('File has been decompressed');
  });

  destinationFileWriteStream.on('error', (error) => {
    console.error('Failed to decompress file:', error);
  });
};

await decompress();
