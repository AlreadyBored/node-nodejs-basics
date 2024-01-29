import { createHash } from "node:crypto";

const sourcePath = "src/hash/files/fileToCalculateHashFor.txt";

const calculateHash = async () => {
  try {
    const hash = createHash("sha256");

    hash.on("readable", () => {
      const data = hash.read();
      if (data) {
        console.log(data.toString("hex"));
      }
    });

    hash.write(sourcePath);
    hash.end();
  } catch (err) {
    console.log(err);
  }
};

await calculateHash();
