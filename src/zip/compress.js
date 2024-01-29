import fs from 'fs';
import zlib from 'zlib';

const compress = async () => {

  const directory = './src/zip/files/';

    function compressFile(inputFilePath, outputFilePath) {
      const readStream = fs.createReadStream(inputFilePath);

      const writeStream = fs.createWriteStream(outputFilePath);

      const gzip = zlib.createGzip();

      readStream
        .pipe(gzip)
        .pipe(writeStream)
        .on('finish', () => console.log('File compression completed.'))
        .on('error', (error) =>
          console.error('Error during compression:', error)
        );
    }

    compressFile(`${directory}fileToCompress.txt`, `${directory}archive.gz`);

};

await compress();