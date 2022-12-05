import fs from "node:fs";
import zlib from "zlib";

const compress = async () => {
  const rf = './files/fileToCompress.txt'
  const wf = './files/archive.gz'

  const rs =fs.createReadStream(rf)
  const ws =fs.createWriteStream(wf)

  rs.pipe(zlib.createGzip()).pipe(ws)
};

await compress();