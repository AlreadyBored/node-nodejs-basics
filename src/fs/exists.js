import { access } from "fs/promises"

const exists = async path => {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

export default exists
