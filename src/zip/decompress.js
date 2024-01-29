import {  createWriteStream, createReadStream  } from "fs";
import path from "path";
import { getDirnameFromUrl } from "../utils/utils";
import { createGunzip } from "zlib";
import { pipeline } from "stream";

const __dirname = getDirnameFromUrl(import.meta.url);
const zippedFile = path.join(__dirname, "files", "archive.gz");
const unzippedFile = path.join(__dirname, "files",  "fileToCompress.txt");


const zippedFileStream = createReadStream(zippedFile );
const unzipStream = createGunzip();
const unzippedFileStream = createWriteStream(unzippedFile);


const decompress = async () => {
    pipeline(
        zippedFileStream,
        unzipStream,
        unzippedFileStream,
        (error) => console.error(error)
       )
};

await decompress();