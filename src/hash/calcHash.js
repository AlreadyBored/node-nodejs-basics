import { createHash } from 'node:crypto'
import { readFile } from 'node:fs/promises'
import { resolve } from 'path'

const calculateHash = async () => {
  const result = createHash('sha256')
    .update(await readFile(resolve("./files/fileToCalculateHashFor.txt")))
    .digest("hex")

  console.log(result)
};

await calculateHash();
