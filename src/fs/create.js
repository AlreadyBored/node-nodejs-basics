import fs from "fs";

const filePath = "./src/fs/files/fresh.txt";
const phraseToWrite = "I am fresh and young";
const fsOperationFailedErrorMessage = "FS operation failed";

const create = async () => {
  if (!fs.existsSync(filePath)) {
    fs.writeFile(filePath, phraseToWrite, (err) => {
      if (err) {
        console.error(err);
      }
    });
  } else {
    throw new Error(fsOperationFailedErrorMessage);
  }
};

await create();
