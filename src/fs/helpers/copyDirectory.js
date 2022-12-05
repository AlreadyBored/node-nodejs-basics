import {cp} from "fs";
import {error} from "./Error.js";

const copyDirectory = async (pathToCopy, pathFromCopy) => {
  cp(pathToCopy, pathFromCopy, {recursive: true} , (err) => {
    if (err) {
      error()
    }
  })
}

export {copyDirectory}