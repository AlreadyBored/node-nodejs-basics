export const calculateHash = async () => {
  import { access, readFile } from 'fs/promises';
  import { fileURLToPath } from 'url';
  import { dirname, join } from 'path';
  import  crypto  from 'crypto'


  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)
  const file = join(__dirname, 'files', 'fileToCalculateHashFor.txt')

  const isFileExists = await exists(file)
  if (!isFileExists) throw new Error('FS operation failed')


  async function main() {
    try {
      const data = await readFile(file );
      const hashSum = crypto.createHash('sha256')
      hashSum.update(data)
      const hex = hashSum.digest('hex')
      console.log(hex)
    } catch {
      console.error(`The file ${file} could not be removed`);
    }
  }
  await main()

  async function exists(path) {
    try {
      await access(path)
      return true
    } catch {
      return false
    }
  }
};