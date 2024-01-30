import fs from 'fs';
import zlib from 'zlib';

const compress = async (filePath, outputFilePath) => {
  const readStream = fs.createReadStream(filePath);

  const writeStream = fs.createWriteStream(outputFilePath);

  const compressStream = zlib.createGzip();

  readStream.pipe(compressStream).pipe(writeStream);

  readStream.on('error', (err) => {
    console.error('Error reading from input file:', err);
  });

  compressStream.on('error', (err) => {
    console.error('Error compressing data:', err);
  });

  writeStream.on('error', (err) => {
    console.error('Error writing to output file:', err);
  });

  writeStream.on('finish', () => {
    console.log(`File compressed successfully. Output file: ${outputFilePath}`);
  });
};

const filePath = 'files/fileToCompress.txt';
const outputFilePath = 'archive.gz';

await compress(filePath, outputFilePath);