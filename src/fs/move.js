import fs from 'fs';

export const copyFile = (src, dest) => {
  const readStream = fs.createReadStream(src);
  const writeStream = fs.createWriteStream(dest);
  readStream.pipe(writeStream).on('finish', () => {
    console.log('File copied');
  }).on('error', () => {
    console.log('Operation failed');
  });
};
