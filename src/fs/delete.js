import fs from "fs";

import { ERROR } from "../constants.js";

const url = import.meta.url;
const path = new URL("./files/fileToRemove.txt", url);

const remove = async () => {
  fs.access(path, (err) => {
    if (err) {
      throw Error(ERROR);
    } else {
      fs.unlink(path, (err) => {
        if (err) throw Error(ERROR);
      });
    }
  });
};

await remove();
