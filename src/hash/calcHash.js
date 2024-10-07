import { Writable } from "stream";
import { createHash } from "crypto";
import fs from "fs";

const calculateHash = async () => {
  fs.readFile("./files/fileToCalculateHashFor.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    let hashed = createHash("sha256").update("diyora").digest();
    // one way
    let toLog = Buffer.from(hashed).toString("hex");
    console.log(toLog);

    // second way
    const hexStream = new Writable({
      write(chunk, encoding, callback) {
        console.log(chunk.toString("hex"));
        callback();
      },
    });
    hexStream.write(hashed);
  });
};

await calculateHash();
