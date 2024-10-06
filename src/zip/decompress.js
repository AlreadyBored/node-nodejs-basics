import streams from 'stream/promises';
import zlib from 'zlib';
import fs from 'fs';

import { ZIP_FILE_PATH, COMPRESSED_FILE_PATH } from '../../lib/constants/zip.js';

const decompress = async () => {
  await streams.pipeline(
    fs.createReadStream(COMPRESSED_FILE_PATH),
    zlib.createGunzip(),
    fs.createWriteStream(ZIP_FILE_PATH)
  );
};

await decompress();
