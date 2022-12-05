import {readdir} from "fs";
import {error} from "./helpers/Error.js";

const list = async () => {
  const path = "src/fs/files"
  readdir(path, (err,files) => {
    if (err) {
      error()
    }
    files.forEach((file) => console.log(file))
  })
};

await list();