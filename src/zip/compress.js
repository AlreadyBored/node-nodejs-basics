import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream';
import { promisify } from 'util';


const compress = async () => {
  const pipelineAsync = promisify(pipeline);
  const inputFilePath = 'src/zip/files/fileToCompress.txt';
  const outputFilePath = 'src/zip/files/archive.gz';

  const readStream = fs.createReadStream(inputFilePath);
  const gzipStream = zlib.createGzip();
  const writeStream = fs.createWriteStream(outputFilePath);

  await pipelineAsync(readStream, gzipStream, writeStream);
};

await compress();
