import { fileURLToPath } from "url";
import { dirname } from "path";

export const getFilenameFromUrl = fileURLToPath;

export const getDirnameFromUrl = (url) => dirname(fileURLToPath(url));