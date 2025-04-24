import path from "path";
import { constants } from "fs";
import { createReadStream } from "fs";
import { createHash } from "crypto";
import fs from "fs/promises";
import { pipeline } from "stream/promises";

const calculateHash = async () => {
  const pathToFile = path.resolve("files", "fileToCalculateHashFor.txt");

  try {
    await fs.access(pathToFile, constants.F_OK);

    const hash = createHash("sha256");

    await pipeline(createReadStream(pathToFile), async function* (source) {
      for await (const chunk of source) {
        hash.update(chunk);
      }
    });

    const result = hash.digest("hex");
    console.log(result);
  } catch (error) {
    console.error("Ошибка:", error);
  }
};

await calculateHash();
