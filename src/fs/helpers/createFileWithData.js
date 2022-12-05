import {appendFile} from "fs";
import {error} from "./Error.js";

const createFileWithData = async (path,data) => {
  appendFile(path, data, (err) => {
    if (err) error()
  })
}


export {createFileWithData}