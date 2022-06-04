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
const outDir = path.resolve(filesDir, `out`)
const fName = path.resolve(outDir, `fileToCompress.txt`)
const fNameGz = path.resolve(outDir, `archive.gz`)


export const decompress = async () => {
    try { await fsPromises.mkdir(outDir) } catch (e) { }
    const fNameRs = fs.createReadStream(fNameGz)
    const fNameGunzWs = fs.createWriteStream(fName)
    const gunzipTs = zlib.createGunzip()

    const endPromise = new Promise((resolve, reject) => {
        fNameGunzWs.on(`finish`, () => {
            resolve()
        }
        ).on(`error`, () => {
            reject
        }
        )
    })

    fNameRs.pipe(gunzipTs).pipe(fNameGunzWs)

    await endPromise

    // Write your code here 
};
