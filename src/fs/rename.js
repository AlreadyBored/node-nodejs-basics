'use strict'

const fsPromises = require('fs/promises')
const path = require('path')

const errorText = `FS operation failed`
const [src, dest] = [`wrongFilename.txt`, `properFilename.md`].map(dName => path.resolve(__dirname, `files`, dName))

export const rename = async () => {
  // Write your code here 
  let srcStat, destStat
  try {
    srcStat = await fsPromises.stat(src)
  } catch (e) {
    throw new Error(errorText)
  }

  try {
    destStat = await fsPromises.stat(dest)
  } catch (e) { }
  if (destStat) throw new Error(errorText)

  await fsPromises.rename(src, dest)

};
