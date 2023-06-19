import fs from "fs";

import { ERROR } from "../constants.js";

const url = import.meta.url;
const path = new URL("./files", url);
const pathCopy = new URL("./files_copy", url);

const copy = async () => {
  fs.access(path, function (error) {
    if (error) {
      throw Error(ERROR);
    } else {
      fs.access(pathCopy, function (error) {
        if (error) {
          fs.cp(path, pathCopy, { recursive: true }, (err) => {
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

await copy();
