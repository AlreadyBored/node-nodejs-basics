import fs from "fs";

const create = async () => {
  const filePath = new URL("./files/fresh.txt", import.meta.url);
  const fileContent = "I am fresh and young";

  fs.access(filePath, (err) => {
    if (err) {
      fs.writeFile(filePath, fileContent, (err) => {
        if (err) {
          throw new Error("FS operation failed");
        } else {
          console.log(`File created in dir ${filePath}`);
        }
      });
    } else {
      throw new Error("FS operation failed");
    }
  });
};

await create();
