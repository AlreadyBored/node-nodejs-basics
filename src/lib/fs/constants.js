import { join } from 'path';
import { cwd } from 'process';

const modulePath = 'fs';
const filesFolder = 'files';
const srcPath = 'src';
const errorMessage = "FS operation failed";

 const pathToFilesFolder = join(cwd(), srcPath, modulePath, filesFolder);

 export { errorMessage, pathToFilesFolder}