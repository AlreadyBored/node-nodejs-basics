import { writeFile, readFile } from "fs";

export const create = async () => {
  const url = "./files/fresh.txt";

  readFile(url, "utf-8", function (err) {
    if (err) {
      writeFile(url, "I am fresh and young", function (err) {});
    }else{
        console.log("FS operation failed");
    }
  });
};

