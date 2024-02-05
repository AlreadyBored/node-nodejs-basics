import { createBrotliCompress } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import path from "node:path";
import { colors } from "./colorize.js";
const brotliCompress = createBrotliCompress();

export const compress = async (...args) => {
  args = args.flat();
  let filePath = path.resolve(args[1]);
  let fileName = path.basename(filePath);
  let destination = path.resolve(args[2]);
  const fileToCompress = await createReadStream(filePath, { flags: "r+" });
  fileToCompress.on("error", (error) => {
    if (error.code === "ENOENT") {
      console.error(colors.failed);
    } else {
      console.error(colors.failed);
    }
  });
  fileToCompress.on("open", async () => {
    const sourceFile = await createReadStream(filePath);
    const destFile = await createWriteStream(`${destination}/${fileName}`);
    pipeline(sourceFile, brotliCompress, destFile, (err) => {
      if (err) {
        console.error(colors.failed);
      }
    });
  });
};
