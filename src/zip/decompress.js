import zlib from "node:zlib";
import path from "node:path";
import fs from "node:fs";

const decompress = async () => {
  const filePath = path.join(import.meta.dirname + "/files/archive.gz");
  const outputPath = path.join(
    import.meta.dirname + "/files/fileToCompress.txt",
  );
  const readStream = fs.createReadStream(filePath);
  const writeStream = fs.createWriteStream(outputPath);
  const gunzip = zlib.createGunzip();

  readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();
