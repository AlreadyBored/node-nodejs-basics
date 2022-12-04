import { createGzip } from "node:zlib"
import { pipeline } from "node:stream"
import { createReadStream, createWriteStream } from "node:fs"
import path from "path"

const compress = async () => {
  const gzip = createGzip()
  const source = createReadStream(path.resolve('./files/fileToCompress.txt'))
  const destination = createWriteStream(path.resolve('./files/archive.gz'))

  pipeline(
    source,
    gzip,
    destination,
    (err) => { if (err) console.log("Error", err) }
  )
};

await compress();
