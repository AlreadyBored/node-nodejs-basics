import fs from "fs";

import { ERROR } from "../constants.js";

const url = import.meta.url;
const path = new URL("./files/fresh.txt", url);

const create = async () => {
  fs.access(path, (err) => {
    if (err) {
      fs.writeFile(path, "I am fresh and young", (err) => {
        if (err) {
          throw Error(ERROR);
        }
      });
    } else {
      throw Error(ERROR);
    }
  });
};

await create();
