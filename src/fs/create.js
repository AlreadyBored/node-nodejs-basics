import { readFileSync, writeFileSync } from "fs";

const filePath = "src/fs/files/fresh.txt";
const fileContent = "I am fresh and young";

export const create = async () => {
  // Write your code here
  try {
    const file = await readFileSync(filePath, { encoding: "utf8" });
    if (!!file) console.error("FS operation failed");
  } catch (error) {
    await writeFileSync(filePath, fileContent, { overwrite: false });
  }
};

export default (() => {
  create();
})();
