import { createBrotliDecompress } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import path from "node:path";
import { colors } from "./colorize.js";

const brotliDeCompress = createBrotliDecompress();

export const deCompress = async (...args) => {
  args = args.flat();
  let filePath = path.resolve(args[1]);
  let fileName = path.basename(filePath);
  let destination = path.resolve(args[2]);
  const fileToDecompress = await createReadStream(filePath, { flags: "r+" });
  fileToDecompress.on("error", (error) => {
    if (error.code === "ENOENT") {
      console.error(colors.failed);
    } else {
      console.error(colors.failed);
    }
  });
  fileToDecompress.on("open", async () => {
    const destFile = await createWriteStream(`${destination}/${fileName}`);
    pipeline(fileToDecompress, brotliDeCompress, destFile, (err) => {
      if (err) {
        console.error(colors.failed);
      }
    });
  });
};
