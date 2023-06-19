import { pipeline as streamPipeline } from 'stream/promises'
import { createGzip } from 'zlib'
import { fileURLToPath } from 'node:url'
import { createReadStream as fsCreateReadStream, createWriteStream as fsCreateWriteStream  } from 'fs'
import { join as pathJoin, dirname as pathDirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = pathDirname(__filename)

const fileName = 'fileToCompress.txt'
const filePath = 'files'
const fileFullPath = pathJoin(__dirname, filePath , fileName)
const archiveName = 'archive.gz'
const archiveFullPath = pathJoin(__dirname, filePath , archiveName)

const compress = async () => {
    await streamPipeline( fsCreateReadStream(fileFullPath), createGzip(), fsCreateWriteStream(archiveFullPath) )
}

await compress()
