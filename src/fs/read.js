import { readFile } from 'node:fs/promises';
import { pathToFiles } from './envs.js';
import { ErrorToShow } from './libs.js';
import { join } from 'node:path';

const FILE_NAME_TO_READ = 'fileToRead1.txt';
const fileToRead = join(pathToFiles, FILE_NAME_TO_READ);

const read = async () => {
  try {
    const contents = await readFile(fileToRead, { encoding: 'utf8'});
    console.log(contents);
  } catch (error) {
    let existingError = ErrorToShow[error.code];
    if (existingError) {
      throw new Error(existingError);
    }
    console.log(error);
  }
};

await read();
