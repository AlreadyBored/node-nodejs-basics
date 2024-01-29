import fs from "fs";
import path from "path";

const create = async () => {
  const fileName = "fresh.txt";
  const fileContent = "I am fresh and young";

  try {
    const fileExists = fs.existsSync(`./src/fs/files/${fileName}`);
    if (fileExists) {
      throw new Error("FS operation failed");
    }
    fs.writeFile(path.join("./src/fs/files/", fileName), fileContent, (err) => {
      if (err) {
        throw new Error("Create file failed");
      }
      console.log("File created successfully");
    });
  } catch (error) {
    console.log(error);
  }
};

await create();
