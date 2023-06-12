import path from "path";
import {fileURLToPath} from "url";

export function dirname(filePath) {
    return path.dirname(
        fileURLToPath(filePath)
    );
}