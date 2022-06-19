import { unlinkSync } from "fs";
const filePath = "src/fs/files/fileToRemove.txt";

export const remove = async () => {
    // Write your code here 
  try {
    unlinkSync(filePath);
    console.log(`file ${filePath} was removed`);
  } catch (e) {
    throw 'FS operation failed';
  }
};

export default (() => {
  remove();
})();
