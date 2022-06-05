import crypto from "node:crypto";
import fs from "fs/promises";

export const calculateHash = async () => {
  let file = await fs.readFile("./hash/files/fileToCalculateHashFor.txt");
  let hash = crypto.createHash("sha256");
  let resultHash = hash.update(file).digest("hex");
  return await resultHash;
};

console.log(await calculateHash());



// return new Promise((resolve, reject) =>{
//   readableStream.on('data', data => str += data);
//   readableStream.on('end', (err,data) => {
//       if(err) reject(err);
//       resolve(hash.update(str).digest('hex'));
//   })
// })