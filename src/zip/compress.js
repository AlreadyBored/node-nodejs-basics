import { gzip, constants } from "zlib";
import { WritableStream } from "node:stream/web";
import { readFileSync } from "fs";
import { appendFile } from "fs/promises";
import { pipeline } from "stream/promises";
import { createReadStream, createWriteStream } from "fs";

export const compress = async () => {
  // FIRST WAY

  //   await pipeline(
  //     createReadStream("./files/fileToCompress.txt"),
  //     createGzip(),
  //     createWriteStream("./files/archive.gz")
  //   );

  // SECOND WAY
  try {
    let zip = {};
    let str = "";
    try {
      str = readFileSync("./files/fileToCompress.txt");
    } catch (err) {
      if (err) {
        console.error(`readS`, err);
        throw err;
      }
    }

    try {
      const stream = new WritableStream({
        write(chunk) {
          gzip(
            chunk,
            { finishFlush: constants.Z_SYNC_FLUSH },
            (err, buffer) => {
              if (err) {
                console.error("An error occurred:", err);
                process.exitCode = 1;
              }
              console.log(buffer);
              appendFile("./files/archive.gz", buffer, {
                flag: "w",
              });
            }
          );
        },
      });
      await stream.getWriter().write(str);
    } catch (err) {
      if (err) {
        console.error(`stream`, err);
        throw err;
      }
    }
  } catch (error) {
    if (error) {
      console.error(error);
    } else {
      console.log(" succeeded.");
    }
  }
};
compress();
