import { createWriteStream } from "fs";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
  const fileToWrite = `${__dirname}/files/fileToWrite.txt`;

  try {
    const writeStream = createWriteStream(fileToWrite, { encoding: "utf8" });

    console.log("Write something and press Enter:");

    process.stdin.on("data", (data) => {
      writeStream.write(data);
      if (data.toString().includes("\n")) {
        process.stdin.end();
        writeStream.end();
      }
    });

    writeStream.on("finish", () => {
      console.log("Good Job : Plese press Ctrl + C ");
    });

    writeStream.on("error", (err) => {
      console.error("Error while reading", err.message);
    });
  } catch (error) {
    console.error(error);
  }
};

await write();
