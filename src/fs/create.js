import {createFile} from './functions/fsFunctions.js';
import {FILE_TO_CREATE_TXT} from '../constants/fileNames.js';

const create = async () => {
  const fileText = 'I am fresh and young';

  return Promise.resolve(createFile(
      import.meta.url,
      '/files/',
      FILE_TO_CREATE_TXT,
      fileText)
  );
};

await create();