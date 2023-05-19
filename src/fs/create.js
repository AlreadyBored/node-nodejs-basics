import { writeFile } from "fs/promises";
import { existsSync } from 'node:fs'

const TEXT = "I am fresh and young";
const PATH = "./src/fs/files/fresh.txt"

const create = async () => {
  // Write your code here
  if (existsSync(PATH)) {
    throw Error(`\u001B[31mFS operation failed\u001B[0m`);
  } else {
    try {
      const promise = writeFile(PATH, TEXT, {});
      await promise;
    } catch (error) {
      throw Error(`\u001B[31mFS operation failed\u001B[0m ${err.message}`);
    }
  }
};

await create();
