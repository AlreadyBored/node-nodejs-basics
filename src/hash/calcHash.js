/*
 You should implement several functions in dedicated files

calcHash.js - implement function that calculates SHA256 hash 
for file fileToCalculateHashFor.txt and logs it into console as hex
 */

import { createHash } from "crypto";
import { readFile } from "fs/promises";
import { FILE_PATH_HASH } from "../common/constants.js";

const calculateHash = async () => {
    
    const fileUrl = new URL(FILE_PATH_HASH, import.meta.url);
  
    const content = await readFile(fileUrl);
    const data = createHash("sha256").update(content);
    const hash = data.digest("hex");
  
    console.log(hash);
};

await calculateHash();