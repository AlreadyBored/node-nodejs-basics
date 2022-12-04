import { access } from "fs/promises"
import { fileURLToPath } from "url"
import path from "path"

const exists = async path => {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

const applyToAllFiles = async (dir, fn) => {
  const entry = await dir.read()
  if (!entry) return
  fn?.(entry)
  return await applyToAllFiles(dir, fn)
}

const getPath = (importMetaUrl, ...pathToFile) => {
  const dirname = path.dirname(fileURLToPath(importMetaUrl))
  return path.join(dirname, ...pathToFile)
}

const getPaths = (importMetaUrl, ...pathsToFiles) =>
  pathsToFiles?.map(p => getPath(importMetaUrl, ...p))

const getFilesPath = (importMetaUrl, fileName) =>
  getPath(importMetaUrl, "files", fileName)

const getFilesPaths = (importMetaUrl, ...fileNames) =>
  fileNames?.map(f => getPath(importMetaUrl, "files", f))

export {
  exists,
  applyToAllFiles,
  getPath,
  getFilesPath,
  getFilesPaths,
  getPaths,
}
