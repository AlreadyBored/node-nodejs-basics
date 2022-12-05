import {createReadStream, createWriteStream} from 'fs';
import zlib from 'zlib';
import {__dirnameGet} from "../fs/utils.mjs";

const compress = async () => {
  const dir = __dirnameGet(import.meta.url);
  const srcFilename = `${dir}/files/fileToCompress.txt`;
  const dstFilename = `${dir}/files/archive.gz`;
  const src = createReadStream(srcFilename);
  const dst = createWriteStream(dstFilename);
  const gz = zlib.createGzip();
  src.pipe(gz).pipe(dst);

};

await compress();
