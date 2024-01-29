import fs from 'fs';
import zlib from 'zlib';

const decompress = async () => {
 const directory = './src/zip/files/';
  function decompressFile(inputFilePath, outputFilePath) {
    const readStream = fs.createReadStream(inputFilePath);

    const writeStream = fs.createWriteStream(outputFilePath);

    const gunzip = zlib.createGunzip();

    readStream
      .pipe(gunzip)
      .pipe(writeStream)
      .on('finish', () => console.log('File decompression completed.'))
      .on('error', (error) =>
        console.error('Error during decompression:', error)
      );
  }

  decompressFile(`${directory}archive.gz`, `${directory}fileToCompress.txt`);
};

await decompress();
