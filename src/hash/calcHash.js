import { createReadStream } from "node:fs";
import { createHash } from "crypto";

const filePath = import.meta.dirname + "/files/fileToCalculateHashFor.txt";

const calculateHash = async () => {
  try {
    const textToHash = createReadStream(filePath);
    const hash = createHash("sha256");
    textToHash.on("data", () => {
      const data = textToHash.read();
      if (data) {
        hash.update(data);
      } else {
        console.log(hash.digest("hex"));
      }
    });
  } catch (error) {
    console.log(error);
  }
};

await calculateHash();
