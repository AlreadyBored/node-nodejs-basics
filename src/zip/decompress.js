import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream';
import { promisify } from 'util';

const pipelineAsync = promisify(pipeline);

const decompress = async () => {
  const inputFilePath = 'src/zip/files/archive.gz';
  const outputFilePath = 'src/zip/files/fileToCompress.txt';

  const readStream = fs.createReadStream(inputFilePath);
  const gunzipStream = zlib.createGunzip();
  const writeStream = fs.createWriteStream(outputFilePath);

  await pipelineAsync(readStream, gunzipStream, writeStream);

  await fs.promises.unlink(inputFilePath);
};

await decompress();
