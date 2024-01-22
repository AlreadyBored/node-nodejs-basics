import fs from "fs";
import getPath from "../helper/getPath.js";

const CHARSET = "utf8";

const write = async (filePath) => {
  const stream = fs.createWriteStream(filePath);

  process.stdin.setEncoding(CHARSET);

  process.stdin.on("data", (input) => {
    if (input.trim() === "q") {
      process.exit();
    }

    const data = `${input.trim()}\n`;
    stream.write(data, CHARSET);
  });

  stream.on("error", (err) => {
    console.error("Something went wrong:", err);
  });
};

const writeFile = getPath(import.meta, "files", "fileToWrite.txt");
await write(writeFile);
