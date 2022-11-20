import * as fsPromise from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import checkFileExistsAsync from "../utils/checkFileExistAsync.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folderPath = path.join(__dirname, "files");

const read = async () => {
  if (!(await checkFileExistsAsync(folderPath))) {
    throw new Error("FS operation failed");
  }

  try {
    const fd = await fsPromise.open(path.join(folderPath, "fileToRead.txt"));
    const rs = fd.createReadStream({ encoding: "utf8" });
    rs.on("data", (dataChunk) => {
      console.log(dataChunk);
    });
    rs.on("close", () => {
      fd.close();
    });
  } catch (err) {
    console.error(err.message);
  }
};

await read();
