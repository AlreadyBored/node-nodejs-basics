import { createHash } from "crypto";
import { createReadStream } from "fs";
import path from "path";

const calculateHash = async () => {
  const currentDir = path.resolve("src", "hash");
  const fileName = "fileToCalculateHashFor.txt";
  const filePath = path.join(currentDir, "files", fileName);

  const fileStream = createReadStream(filePath);

  const hash = createHash("sha256");
  fileStream.pipe(hash);

  return new Promise((res, rej) => {
    hash.on("readable", () => {
      const data = hash.read();
      if (data) {
        console.log("SHA256 Hash: ", data.toString("hex"));
        res();
      }
    });

    hash.on("error", (err) => {
      rej(err);
    });

    fileStream.on("end", () => {
      res();
    });
  });
};

await calculateHash();
