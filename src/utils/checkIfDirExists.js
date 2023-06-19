import fs from 'fs';

const checkIfDirExists = (fileDir) => {
  return fs.promises.access(fileDir, fs.constants.F_OK)
    .then(() => true)
    .catch(() => false)
}

export default checkIfDirExists;