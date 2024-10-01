import { stat } from 'fs/promises';

async function isNotExist(file) {
  try {
    await stat(file)
    return false
  }
  catch {
    return true
  }

}

export default isNotExist;

