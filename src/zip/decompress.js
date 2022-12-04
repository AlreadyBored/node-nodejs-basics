import { createGunzip } from "node:zlib"
import { pipeline, Transform } from "node:stream"
import { createReadStream, createWriteStream } from "node:fs"
import path from "path"

const decompress = async () => {
  const gunzip = createGunzip()
  const source = createReadStream(path.resolve('./files/archive.gz'))
  const destination = createWriteStream(path.resolve('./files/fileToCompress.txt'))

  pipeline(
    source,
    gunzip,
    destination,
    (err) => { if (err) console.log(err) }
  )
};

await decompress();
