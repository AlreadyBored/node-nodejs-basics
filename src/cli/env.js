export const parseEnv = () => {
  import { accessSync, readFileSync } from 'fs';
  import { fileURLToPath } from 'url'
  import { dirname, join } from 'path'

  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)
  const file = join(__dirname, '.env')

  const isFileExists = exists(file)
  if (!isFileExists) throw new Error('FS operation failed')


  function main() {
    try {
      const data = readFileSync(file);
      console.log(parseVariables(data))
    } catch {
      console.error(`The file ${file} could not be read`);
    }
  }
  main()


  function parseVariables(data) {
    const array = data.toString().split('\n').filter(el => el !== '')
    const result = array.map(el => {
      const variable = el.split('=')
      if (variable.length !== 2) throw new Error(`${el} is not valid environment variable`)
      return `RSS_${variable[0]}=${variable[1]}`
    })
    return result.join('; ')
  }

  function exists(path) {
    try {
      accessSync(path)
      return true
    } catch {
      return false
    }
  }
};