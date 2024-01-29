import { FS_ERROR } from "../consts/error.js";

export function throwFSError(error = FS_ERROR) {
  throw new Error(error)
}