import { stat } from 'node:fs/promises';

export const isExist = async (myPath) => {
  try {
    await stat(myPath);
    return true;    
  } catch (error) {
    return false;
  }
} 