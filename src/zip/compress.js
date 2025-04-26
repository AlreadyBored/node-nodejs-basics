import fs from 'fs';
import zlib from 'zlib';
import path from 'node:path';

const compress = async () => {
  const fileToCompress = 'fileToCompress.txt';
  const destForCompressed = 'archive.gz';

  const directory = path.resolve('./src/zip/files');

  async function compressFile(inputFilePath, outputFilePath) {
    fs.readdir(directory, { recursive: true }, (err, files) => {
      if (!files.includes(fileToCompress)) {
        throw new Error(
          'No such file! First decompress or create new "fileToCompress.txt"'
        );
      }
      if (err) throw err;
    });
    const readStream = fs.createReadStream(inputFilePath);
    const writeStream = fs.createWriteStream(outputFilePath);
    const gzip = zlib.createGzip();
    readStream
      .pipe(gzip)
      .pipe(writeStream)
      .on('finish', () => {
        fs.rm(path.join(directory, fileToCompress), () => {
          console.log('Original "fileToCompress.txt" was deleted');
        });
        console.log('File compression completed.');
      })
      .on('error', (error) =>
        console.error('Error during compression:', error)
      );
  }

  await compressFile(
    path.join(directory, fileToCompress),
    path.join(directory, destForCompressed)
  );
};

await compress();
