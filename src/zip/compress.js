import fs from 'fs';
import zlib from 'zlib';

const compress = async () => {
    const sourceFilePath = 'files/fileToCompress.txt';
    const targetFilePath = 'files/archive.gz';
    const sourceStream = fs.createReadStream(sourceFilePath);
    const targetStream = fs.createWriteStream(targetFilePath);
    const gzipStream = zlib.createGzip();
    sourceStream.pipe(gzipStream).pipe(targetStream);
    targetStream.on('finish', () => {
      console.log(`File '${sourceFilePath}' compressed to '${targetFilePath}'.`);
    });
    targetStream.on('error', (error) => {
      console.error(`Error compressing file: ${error.message}`);
    });
};

try {
    await compress();
  } catch (error) {
    console.error(error);
  }