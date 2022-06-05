import fs from "fs";
import { pipeline } from "stream";
import { createUnzip } from "zlib";

export const decompress = async () => {
    pipeline(fs.createReadStream("./files/archive.gz"), createUnzip(), fs.createWriteStream("./files/fileToCompress.txt"), (err) => {
        console.log(err);
    });
};