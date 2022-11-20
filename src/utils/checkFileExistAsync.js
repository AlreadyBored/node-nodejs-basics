import * as fsPromise from "fs/promises";

const checkFileExistsAsync = (file) => {
  return fsPromise
    .access(file, fsPromise.constants.F_OK)
    .then(() => true)
    .catch(() => false);
};

export default checkFileExistsAsync;
