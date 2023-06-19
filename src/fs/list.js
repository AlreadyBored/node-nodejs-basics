import fs from "fs";

import { ERROR } from "../constants.js";

const url = import.meta.url;
const path = new URL("./files", url);

const list = async () => {
  fs.access(path, (err) => {
    if (err) {
      throw Error(ERROR);
    } else {
      fs.readdir(path, (err, files) => {
        if (err) {
          throw Error(ERROR);
        } else {
          files.forEach((file) => {
            console.log(file);
          });
        }
      });
    }
  });
};

await list();
