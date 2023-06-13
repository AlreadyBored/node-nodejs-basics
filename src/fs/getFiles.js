import fs from "fs";

const getFiles = async (dirPath) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dirPath, (error, files) => {
      if (error !== null) {
        return reject(errorMessage);
      }

      const result = files.map((file) => {
        const extIndex = file.lastIndexOf(".");

        if (extIndex === -1) {
          return [file, ""];
        }

        return [
          dirPath,
          file.substring(0, extIndex),
          file.substring(extIndex + 1),
        ];
      });

      resolve(result);
    });
  });
};

export default getFiles;
