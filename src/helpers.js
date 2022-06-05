import {fileURLToPath} from 'url';

export const getDirAndFilePath = (importMeta) => {
  const __dirname = fileURLToPath(new URL('.', importMeta.url));

  return {
    __dirname
  };
};