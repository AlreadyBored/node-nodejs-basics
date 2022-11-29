import { access } from 'fs/promises';

export async function isExists(path) {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}