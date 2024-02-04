import fs from 'fs';
import zlib from 'zlib';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async (archiveFilePath, outputFilePath) => {
  try {
    const inputFile = join(__dirname, archiveFilePath);
    const outputFile = join(__dirname, outputFilePath);

    const readStream = fs.createReadStream(inputFile);
    const writeStream = fs.createWriteStream(outputFile);
    const decompressStream = zlib.createGunzip();

    readStream.pipe(decompressStream).pipe(writeStream);

    readStream.on('error', (err) => {
      console.error('Error reading from compressed input file:', err);
    });

    decompressStream.on('error', (err) => {
      console.error('Error decompressing data:', err);
    });

    writeStream.on('error', (err) => {
      console.error('Error writing to output file:', err);
    });

    writeStream.on('finish', () => {
      console.log(`File decompressed successfully. Output file: ${outputFile}`);
    });
  } catch (error) {
    console.error(`Error during decompression: ${error.message}`);
  }
};

const archiveFilePath = 'archive.gz';
const outputFilePath = 'files/fileToCompress.txt';

await decompress(archiveFilePath, outputFilePath);