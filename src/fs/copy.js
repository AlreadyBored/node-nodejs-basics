import { mkdir, readdir, copyFile } from 'node:fs/promises'
import { MESSAGES } from '../utils.js'

const copy = async () => {
  // Write your code here

  const ORIGINAL_FOLDER = './files'
  const ORIGINAL_FOLDER_URL = new URL(ORIGINAL_FOLDER, import.meta.url)
  const COPY_FOLDER = './files_copy'
  const COPY_FOLDER_URL = new URL(COPY_FOLDER, import.meta.url)

  await Promise.allSettled([
    readdir(ORIGINAL_FOLDER_URL),
    mkdir(COPY_FOLDER_URL, { recursive: true }),
  ]).then(async (result) => {
    if (result[0].status === 'rejected' || result[1].value === undefined) {
      throw Error(MESSAGES.error)
    } else {
      const promises = result[0].value.map((filename) => {
        return copyFile(
          `${ORIGINAL_FOLDER}/${filename}`,
          `${COPY_FOLDER}/${filename}`,
        )
      })

      await Promise.all(promises)
    }
  })
}

await copy()
