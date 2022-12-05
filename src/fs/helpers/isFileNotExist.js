import {access, constants} from "fs";
import {error} from "./Error.js";

const isFileNotExist = async (pathToFolder) => {
  access(pathToFolder, constants.F_OK, (err) => {
    if (!err) {
      error()
    }
  })
}

export {isFileNotExist}