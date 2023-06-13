import fs from "node:fs/promises";
import url from "node:url";
import path from "node:path";

const throwFSError = () => {
  throw new Error("FS operation failed");
};

export const existsWrapper =
  ({ onExists = throwFSError, onDoesntExists = throwFSError }) =>
  async (path) => {
    try {
      await fs.access(path, fs.constants.W_OK | fs.constants.R_OK);

      return onExists(path);
    } catch (error) {
      if (error.code === "ENOENT") {
        return onDoesntExists(path);
      }

      throw error;
    }
  };

export const filename = (_url) => url.fileURLToPath(_url);
export const dirname = (_url) => path.dirname(filename(_url));
export const joinToURL = (_url, ...join) => path.join(dirname(_url), ...join);
