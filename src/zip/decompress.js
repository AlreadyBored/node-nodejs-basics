import fs from 'fs';
import zlib from 'zlib';

const decompress = async (archiveFilePath, outputFilePath) => {
  const readStream = fs.createReadStream(archiveFilePath);

  const writeStream = fs.createWriteStream(outputFilePath);

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
    console.log(`File decompressed successfully. Output file: ${outputFilePath}`);
  });
};

const archiveFilePath = 'archive.gz';
const outputFilePath = 'files/fileToCompress.txt';

await decompress(archiveFilePath, outputFilePath);