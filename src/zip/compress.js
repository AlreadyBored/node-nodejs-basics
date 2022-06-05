import fs from "fs";
import { pipeline } from "stream";
import { createGzip } from "zlib";

export const compress = async () => {
  pipeline(fs.createReadStream("./files/fileToCompress.txt"), createGzip(), fs.createWriteStream("./files/archive.gz"), (err) => {
    console.log(err);
  });
};