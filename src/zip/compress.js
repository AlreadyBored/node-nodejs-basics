'use strict'

const path = require('path')
const fsPromises = require('fs/promises')
const fs = require('fs')
// const streams = require('stream')
const zlib = require('zlib')

const filesDir = path.resolve(
  // path.dirname(fileURLToPath(import.meta.url)),
  __dirname,
  `files`)
const fName = path.resolve(filesDir, `fileToCompress.txt`)
const outDir = path.resolve(filesDir, `out`)
const fNameGz = path.resolve(outDir, `archive.gz`)


export const compress = async () => {
  await fsPromises.mkdir(outDir)
  const fNameRs = fs.createReadStream(fName)
  const fNameGzWs = fs.createWriteStream(fNameGz)
  const gzipTs = zlib.createGzip()

  const endPromise = new Promise((resolve, reject) => {
    fNameGzWs.on(`finish`, () => {
      resolve()
    }
    ).on(`error`, () => {
      reject
    }
    )
  })

  fNameRs.pipe(gzipTs).pipe(fNameGzWs)

  await endPromise

  // Write your code here 
};
