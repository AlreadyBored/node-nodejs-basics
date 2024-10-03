import { createReadStream } from "fs";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const read = async () => {
  const fileToRead = `${__dirname}/files/fileToRead.txt`;
  try {
    const readStream = createReadStream(fileToRead, { encoding: "utf8" });

    readStream.pipe(process.stdout);
    readStream.on("error", (err) => {
      console.error("Error while reading file", err.message);
    });
    readStream.on("end", () => {
      console.log("\nFile reading finished ");
    });
  } catch (error) {
    console.error(error);
  }
};

await read();
