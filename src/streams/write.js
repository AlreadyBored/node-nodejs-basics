import { open } from "fs/promises";
import { pipeline } from "node:stream/promises";

export const write = async () => {
  const fd = await open("./src/streams/files/fileToWrite.txt", "r+");
  let input = process.stdin.on("data", (data) => data.toString());

  pipeline(
    input,
    fd.createWriteStream({
      encoding: "utf8",
      autoClose: true,
      emitClose: true,
    })
  );
};

write();
