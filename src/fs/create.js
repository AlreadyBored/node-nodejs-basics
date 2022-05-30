import * as fs from "fs";

export const create = async () => {
  const text = "I am fresh and young";
  fs.writeFile("src/fs/files/fresh.txt", text, { flag: "wx" }, (error) => {
    if (error) throw new Error("FS operation failed");
  });
};
create();
