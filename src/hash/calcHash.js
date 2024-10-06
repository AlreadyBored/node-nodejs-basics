import { createReadStream } from "fs";
import { createHash } from "crypto";

const FILE_PATH = "./src/hash/files/fileToCalculateHashFor.txt";

const getHash = (path) =>
  new Promise((resolve, reject) => {
    const hash = createHash("sha256");
    const rs = createReadStream(path);
    rs.on("error", reject);
    rs.on("data", (chunk) => hash.update(chunk));
    rs.on("end", () => resolve(hash.digest("hex")));
  });

const calculateHash = async () => {
  try {
    const hashValue = await getHash(FILE_PATH);
    console.log(hashValue);
  } catch (error) {
    console.error(error);
  }
};

await calculateHash();
