import { createBrotliDecompress } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import path from "node:path";
import { colors } from "./colorize.js";
import fs from "node:fs";

const brotliDeCompress = createBrotliDecompress();

export const deCompress = async (...args) => {
  args = args.flat();
  let filePath = path.resolve(args[1]);
  let fileName = path.basename(filePath);
  let destination = path.resolve(args[2] ? args[2] : path.dirname(filePath));
  fs.access(filePath, fs.constants.F_OK, async (err) => {
    if (err) {
      console.error(colors.failed);
    } else {
      const fileToDecompress = await createReadStream(filePath, {
        flags: "r+",
      });
      const destFile = await createWriteStream(`${destination}/${fileName}`);
      pipeline(fileToDecompress, brotliDeCompress, destFile, (err) => {
        if (err) {
          console.error(colors.failed);
        }
      });
    }
  });
};
