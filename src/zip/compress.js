import zlib from "zlib";
import fs from "fs";
import stream from "stream";

const compress = async () => {
  // Write your code here
  const gzlib = zlib.createGzip();
  const sourse = fs.createReadStream(
    import.meta.dirname + "/files/fileToCompress.txt"
  );
  const destination = fs.createWriteStream(
    import.meta.dirname + "/files/archive.gz"
  );

  stream.pipeline(sourse, gzlib, destination, (err) => {
    if (err) {
      console.log(err);
      process.exitCode = 1; // exit with error (0 - success)
    }
  });
};

await compress();
