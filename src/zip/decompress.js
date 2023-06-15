import fs from 'fs';
import zlib from 'zlib';

const decompress = async () => {
    const sourceFilePath = 'files/archive.gz';
    const targetFilePath = 'files/fileToCompress.txt';
    const sourceStream = fs.createReadStream(sourceFilePath);
    const targetStream = fs.createWriteStream(targetFilePath);
    const gunzipStream = zlib.createGunzip();
    sourceStream.pipe(gunzipStream).pipe(targetStream);
    targetStream.on('finish', () => {
      console.log(`File '${sourceFilePath}' decompressed to '${targetFilePath}'.`);
    });
    targetStream.on('error', (error) => {
      console.error(`Error decompressing file: ${error.message}`);
    });
};

try {
    await decompress();
  } catch (error) {
    console.error(error);
  }