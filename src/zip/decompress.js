import fs from "node:fs";
import zlib from "zlib";

const decompress = async () => {
  const rf = './files/archive.gz'
  const wf = './files/fileToCompress.txt'

  const rs =fs.createReadStream(rf)
  const ws =fs.createWriteStream(wf)

  rs.pipe(zlib.createUnzip()).pipe(ws)
};

await decompress();