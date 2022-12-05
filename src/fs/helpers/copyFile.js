import {copyFile as copyFileFC} from "fs";
import {error} from "./Error.js";

const copyFile = async (pathToCopy, pathFromCopy) => {
  copyFileFC(pathToCopy, pathFromCopy , (err) => {
    if (err) {
      error()
    }
  })
}

export {copyFile}