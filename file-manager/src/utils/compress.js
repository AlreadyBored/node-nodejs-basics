import { createBrotliCompress } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import path from "node:path";
import { colors } from "./colorize.js";
const brotliCompress = createBrotliCompress();
import fs from "node:fs";

export const compress = async (...args) => {
  args = args.flat();
  let filePath = path.resolve(args[1]);
  let fileName = path.basename(filePath);
  let destination = path.resolve(args[2] ? args[2] : path.dirname(filePath));

  try {
    fs.access(filePath, fs.constants.F_OK, async (err) => {
      if (err) {
        console.error(colors.failed);
      } else {
        const fileToCompress = await createReadStream(filePath, {
          flags: "r+",
        });
        const destFile = await createWriteStream(`${destination}/${fileName}`);
        pipeline(fileToCompress, brotliCompress, destFile, (err) => {
          if (err) {
            console.error(colors.failed);
          }
        });
      }
    });
  } catch (err) {
    console.error(colors.failed);
  }
};
