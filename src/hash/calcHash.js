import { access, readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import  crypto  from 'crypto'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const exists = async(path) => {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

export const calculateHash = async () => {
  const file = join(__dirname, 'files', 'fileToCalculateHashFor.txt')
  const isFileExists = await exists(file)
  if (!isFileExists) throw new Error('FS operation failed')

  let hex = ''
  try {
    const data = await readFile(file );
    const hashSum = crypto.createHash('sha256')
    hashSum.update(data)
    hex = hashSum.digest('hex')
  } catch {
    console.error(`The file ${file} could not be removed`);
  }
  return hex
};

// test
console.clear()
console.log(await calculateHash())