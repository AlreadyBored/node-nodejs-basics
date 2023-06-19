import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const TEXT_PATHNAME = path.resolve(
  __dirname,
  "files/fileToCompress.txt"
);

export const ARCHIVE_PATHNAME = path.resolve(__dirname, "files/archive.gz");
