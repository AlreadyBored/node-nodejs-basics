import { createWriteStream } from "fs";
import { stdin } from "process";

export const write = async () => {
  // Write your code here
  const basePath = "src/streams";
  const folderPath = `${basePath}/files`;

  const stream = createWriteStream(`${folderPath}/fileToWrite.txt`, {
    encoding: "utf8",
  });

  stdin.pipe(stream);
  stream.end("world!");
};

export default (() => {
  write();
})();
