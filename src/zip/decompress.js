import {createReadStream, createWriteStream} from 'fs';
import zlib from 'zlib';
import {__dirnameGet} from "../fs/utils.mjs";

const decompress = async () => {
  const dir = __dirnameGet(import.meta.url);
  const dstFilename = `${dir}/files/fileToCompress.txt`;
  const srcFilename = `${dir}/files/archive.gz`;
  const src = createReadStream(srcFilename);
  const dst = createWriteStream(dstFilename);
  const gz = zlib.createGunzip();
  src.pipe(gz).pipe(dst);

};

await decompress();
