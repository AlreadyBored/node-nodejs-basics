import streams from 'stream/promises';
import zlib from 'zlib';
import fs from 'fs';

import { ZIP_FILE_PATH, COMPRESSED_FILE_PATH } from '../../lib/constants/zip.js';

const compress = async () => {
  await streams.pipeline(
    fs.createReadStream(ZIP_FILE_PATH),
    zlib.createGzip(),
    fs.createWriteStream(COMPRESSED_FILE_PATH)
  );
};

await compress();
