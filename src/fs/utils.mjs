import {access} from "fs/promises";
import {constants} from "fs";
import {fileURLToPath} from "url";
import path from "path";

export const fileExists = async (name) => {
  try {
    await access(name, constants.F_OK);
    return true;
  } catch (e) {
    return false;
  }
}

export const logError = (text, value) => value ? console.error(text, value) : console.error(text);
export const log = (text, value) => value ? console.log(text, value) : console.log(text);

export const __filenameGet = meta => fileURLToPath(meta);
export const __dirnameGet = meta => path.dirname(__filenameGet(meta));

// module.exports = {
//   fileExists,
//   logError,
//   log,
// }
// const {access} = require("fs/promises");
// const {constants} = require("fs");
// const fileExists = async (name) => {
//   try {
//     await access(name, constants.F_OK);
//     return true;
//   } catch (e) {
//     return false;
//   }
// }
//
// const logError = (text, value) => value ? console.error(text, value) : console.error(text);
// const log = (text, value) => value ? console.log(text, value) : console.log(text);
//
// module.exports = {
//   fileExists,
//   logError,
//   log,
// }
