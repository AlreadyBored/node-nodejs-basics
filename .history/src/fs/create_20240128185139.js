import fs from "fs";
const create = async () => {
    const path = "./src/fs/files/fresh.txt";

  fs.access(path, fs.constants.F_OK, (existenceError) => {
    try {
      if (!existenceError) {
        throw new Error("FS operation failed");
      }

      fs.writeFile(path, "I am fresh and young", () => {
        console.log("FS operation completed");
      });
    } catch (processError) {
      console.error(processError);
    }
  });
};

await create();