import { readFileSync } from "fs";

const filePath = "src/fs/files/fileToRead.txt";
const fileContent = "I am fresh and young";

export const read = async () => {
  // Write your code here
  try {
    const data = await readFileSync(filePath, { encoding: "utf8", flag: "r" });
    console.log(data);
  } catch (error) {
    throw 'FS operation failed';
  }
};

export default (() => {
  read();
})();
