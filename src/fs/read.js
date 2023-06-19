import fs from "fs";
import { ERROR } from "../constants.js";

const url = import.meta.url;
const path = new URL("./files/fileToRead.txt", url);

const read = async () => {
  fs.access(path, (err) => {
    if (err) {
      throw Error(ERROR);
    } else {
      fs.readFile(path, "utf-8", (err, data) => {
        if (err) {
          throw Error(ERROR);
        } else {
          console.log(data);
        }
      });
    }
  });
};

await read();
