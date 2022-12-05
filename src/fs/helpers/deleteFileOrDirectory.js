import {unlink} from "fs";
import {error} from "./Error.js";

const deleteFileOrDirectory = async (path) => {
  unlink(path, (err) => {
    if (err) {
      error()
    }
  })
}

export {deleteFileOrDirectory}