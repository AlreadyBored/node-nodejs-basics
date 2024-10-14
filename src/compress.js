import zlib from 'zlib';
import { resolve } from 'path';
import { access } from 'fs/promises';
import { createWriteStream, createReadStream, constants } from 'fs';

const compressor = async (src, dest, action) => {
  const srcName = resolve(src);
  const destName = resolve(dest);
  try {
    await access(destName, constants.R_OK | constants.W_OK);
    console.log('\x1b[31m%s\x1b[0m', 'Operation Failed: ', `File ${dest} exists`);
  } catch (e) {
    try {
      await access(src, constants.R_OK | constants.W_OK);
      await new Promise((resolve) => {
        const readStream = createReadStream(srcName);
        const writeStream = createWriteStream(destName);
        let brotli;
        if (action === 'compress') brotli = zlib.createBrotliCompress();
        else brotli = zlib.createBrotliDecompress();

        const stream = readStream.pipe(brotli).pipe(writeStream);
        stream.on('finish', () => {
          console.log('File handled successfully');
          resolve();
        });
      });
    } catch (e) {
      if (e.code === 'ENOENT')
        console.log('\x1b[31m%s\x1b[0m', 'Operation Failed: ', `File ${src} doesn't exist`);
      else console.log(e.message);
    }
  }
};
export default compressor;
