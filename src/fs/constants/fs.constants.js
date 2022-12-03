import {fileURLToPath} from "url";
import path from "path";

const __pathToCurrentFile = fileURLToPath(import.meta.url);
const DIR_NAME = path.dirname(__pathToCurrentFile);
const FILES_FOLDER_PATH = path.join(DIR_NAME, '..', "files")

export {DIR_NAME, FILES_FOLDER_PATH };