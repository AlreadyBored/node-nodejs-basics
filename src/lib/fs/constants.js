import { join } from 'path';
import { cwd } from 'process';

const moduleName = 'fs';
const filesFolder = 'files';
const srcName = 'src';
const errorMessage = "FS operation failed";

 const pathToFolder = (folderName = filesFolder) => {
    return join(cwd(), srcName, moduleName, folderName)
};

 export { errorMessage, pathToFolder}