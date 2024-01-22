import { dirname } from 'path'
import { fileURLToPath } from 'url'

export const getDirname = (url) => {
  const currentModulePath = fileURLToPath(url)
  return dirname(currentModulePath)
}