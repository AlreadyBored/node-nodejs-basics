import {stat} from 'fs/promises'; 
export const pathExists = async (path) => (
  !!await stat(path).catch(() => false )
);