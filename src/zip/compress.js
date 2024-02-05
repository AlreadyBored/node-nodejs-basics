import fs from 'fs';
import zlib from 'zlib';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async (filePath, outputFilePath) => {
  try {
    const inputFile = join(__dirname, filePath);
    const outputFile = join(__dirname, outputFilePath);

    const readStream = fs.createReadStream(inputFile);
    const writeStream = fs.createWriteStream(outputFile);
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
      console.log(`File compressed successfully. Output file: ${outputFile}`);
    });
  } catch (error) {
    console.error(`Error during compression: ${error.message}`);
  }
};

const filePath = 'files/fileToCompress.txt';
const outputFilePath = 'archive.gz';

await compress(filePath, outputFilePath);