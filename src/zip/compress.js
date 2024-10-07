import fs from 'fs';
import zlib from 'zlib';

const __dirname = import.meta.dirname;

const compress = async () => {
  const inputPath = `${__dirname}/files/fileToCompress.txt`;
  const outputPath = `${__dirname}/files/archive.gz`;
  const gzip = zlib.createGzip();
  const handleError = (err) => console.error(err.message);
  const readStream = fs.createReadStream(inputPath);
  const writeStream = fs.createWriteStream(outputPath);

  readStream.pipe(gzip).pipe(writeStream);
  writeStream.on('finish', () => console.log(`Success!`));
  
  gzip.on('error', handleError);
  readStream.on('error', handleError);
  writeStream.on('error', handleError);
};

await compress();