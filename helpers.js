import {dirname} from 'path'
import { fileURLToPath } from 'url';

export const getExecutedFileDirname = (metaUrl) => dirname(fileURLToPath(metaUrl));
