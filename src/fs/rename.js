import fs from "fs";
import { ERROR } from "../constants.js";

const url = import.meta.url;
const oldPath = new URL("./files/wrongFilename.txt", url);
const newPath = new URL("./files/properFilename.txt", url);

const rename = async () => {
  fs.access(oldPath, (err) => {
    if (err) {
      throw Error(ERROR);
    } else {
      fs.access(newPath, (err) => {
        if (err) {
          fs.rename(oldPath, newPath, function (err) {
            if (err) {
              throw Error(ERROR);
            }
          });
        } else {
          throw Error(ERROR);
        }
      });
    }
  });
};

await rename();
