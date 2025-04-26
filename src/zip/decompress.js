import fs from 'fs';
import zlib from 'zlib';
import path from 'path';

const decompress = async () => {
  const decompressedFile = 'fileToCompress.txt';
  const toDecompress = 'archive.gz';

  const directory = path.resolve('./src/zip/files/');
  function decompressFile(inputFilePath, outputFilePath) {
    fs.readdir(directory, { recursive: true }, (err, files) => {
      if (!files.includes(toDecompress)) {
        throw new Error(
          'Nothing to decompress'
        );
      }
      if (err) throw err;
    });
    const readStream = fs.createReadStream(inputFilePath);

    const writeStream = fs.createWriteStream(outputFilePath);

    const gunzip = zlib.createGunzip();

    readStream
      .pipe(gunzip)
      .pipe(writeStream)
      .on('finish', () => {
        fs.rm(path.join(directory, toDecompress), (err) => {
          if (err) throw err;
          console.log('File decompression completed. Compressed file was deleted');
        });
        })
      .on('error', (error) =>
        console.error('Error during decompression:', error)
      );
  }

  decompressFile(
    path.join(directory, toDecompress),
    path.join(directory, decompressedFile)
  );
};

await decompress();
