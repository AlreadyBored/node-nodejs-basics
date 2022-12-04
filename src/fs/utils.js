import { access } from "fs/promises"

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

export { exists, applyToAllFiles }
