'use strict'

const fsPromises = require('fs/promises')
const path = require('path')

const errorText = `FS operation failed`
const [src, dest] = [`files`, `files_copy`].map(dName => path.resolve(__dirname, dName))

export const copy = async () => {
  let srcStat, destStat
  try {
    srcStat = await fsPromises.stat(src)
  } catch (e) {
    throw new Error(errorText)
  }
  if (!srcStat.isDirectory()) {
    throw new Error(errorText)
  }

  try {
    destStat = await fsPromises.stat(dest)
  } catch (e) { }
  if (destStat) throw new Error(errorText)

  await fsPromises.cp(src, dest, { recursive: true })

  // Write your code here 
};
