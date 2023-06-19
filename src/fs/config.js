import path from "node:path";
import url from "node:url";

export const DIRNAME = path.dirname(url.fileURLToPath(import.meta.url));

export const FILES_DIR = path.resolve(DIRNAME, "./files");
