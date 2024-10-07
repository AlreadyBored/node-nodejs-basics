import { join } from "path";
import { createGunzip } from "zlib";
import { pipeline } from "stream/promises";
import { createReadStream, createWriteStream } from "fs";
import {getExecutedFileDirname} from "../../helpers.js";

const __dirname = getExecutedFileDirname(import.meta.url);
const fileToDecomposePath = join(__dirname, "files", "archive.gz");
const destinationFilePath = join(__dirname, "files", "fileToCompress.txt");

const decompress = async () => {
  try {
    await pipeline(
      createReadStream(fileToDecomposePath),
      createGunzip(),
      createWriteStream(destinationFilePath)
    );
    console.log("gUnzip succeeded");
  } catch (err) {
    console.error("Something went wrong! ", err);
  }
};

await decompress();
