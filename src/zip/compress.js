import { join } from "path";
import { createGzip } from "zlib";
import { pipeline } from "stream/promises";
import { createReadStream, createWriteStream } from "fs";
import {getExecutedFileDirname} from "../../helpers.js";

const __dirname = getExecutedFileDirname(import.meta.url);
const fileToComposePath = join(__dirname, "files", "fileToCompress.txt");
const destinationFilePath = join(__dirname, "files", "archive.gz");

const compress = async () => {
  try {
    await pipeline(
      createReadStream(fileToComposePath),
      createGzip(),
      createWriteStream(destinationFilePath)
    );
    console.log("gZip succeeded");
  } catch (err) {
    console.error("Something went wrong! ", err);
  }
};

await compress();
