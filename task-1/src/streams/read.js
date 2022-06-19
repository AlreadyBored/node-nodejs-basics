import { createReadStream } from "fs";
import { stdout } from "process";
export const read = async () => {
  // Write your code here
  const basePath = "src/streams";
  const folderPath = `${basePath}/files`;

  const readableStream = await createReadStream(
    `${folderPath}/fileToRead.txt`,
    { encoding: "utf8" }
  );

  readableStream.pipe(stdout);

  readableStream.on("error", (error) => {
    console.log(`error: ${error.message}`);
  });

  readableStream.on("data", (chunk) => {
    console.log(chunk);
  });
};

export default (() => {
  read();
})();
