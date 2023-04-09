import zlib from "zlib";
import fs from "fs";
import { pipeline } from "stream";
const decompress = async () => {
  const unzip = zlib.createUnzip();
  const input = fs.createReadStream("./files/archive.gz");
  const output = fs.createWriteStream("./files/fileToCompress_extracted.txt");
  pipeline(input, unzip, output, (error) => {
    if (error) console.log(error);
  });
};

await decompress();
