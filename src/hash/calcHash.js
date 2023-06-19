import { createHash } from "crypto";
import fs from "fs";

import { ERROR } from "../constants.js";

const url = import.meta.url;
const path = new URL("./files/fileToCalculateHashFor.txt", url);

const calculateHash = async () => {
  fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
      throw Error(ERROR);
    } else {
      const hash = createHash("sha256").update(data).digest("hex");
      console.log(hash);
    }
  });
};

await calculateHash();
