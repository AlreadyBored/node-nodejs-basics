import { unzip, constants } from "zlib";
import { WritableStream } from "node:stream/web";
import { readFileSync } from "fs";
import { appendFile } from "fs/promises";

export const decompress = async () => {
  try {
    let zip = {};
    try {
      zip = readFileSync("./files/archive.gz");
    } catch (err) {
      if (err) {
        console.error(`readS`, err);
        throw err;
      }
    }

    try {
      const stream = new WritableStream({
        write(chunk) {
          unzip(
            chunk,
            { finishFlush: constants.Z_SYNC_FLUSH },
            (err, buffer) => {
              if (err) {
                console.error("An error occurred:", err);
                process.exitCode = 1;
              }
              appendFile("./files/fileToCompress.txt", buffer.toString(), {
                flag: "w",
              });
            }
          );
        },
      });
      await stream.getWriter().write(zip);
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
decompress();
