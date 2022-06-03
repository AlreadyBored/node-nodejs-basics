import { readFile } from "fs/promises";
export const read = async () => {
  let data = readFile("./files/fileToRead.txt", { flag: "r+" });

  data.then((res) => console.log(res.toString()));
  data.catch(() => {
    console.log(new Error("FS operation failed"));
    process.exit(1);
  });
};
read();
