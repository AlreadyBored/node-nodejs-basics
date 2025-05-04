import fs from 'node:fs'
import path from 'node:path'
import zlib from 'node:zlib'

import { printCurrencyPath } from './output.js'

const handleCatCommand = (input) => {
  const filePath = input.slice(4).trim()
  const fullPath = path.resolve(process.cwd(), filePath)
  const readStream = fs.createReadStream(fullPath, 'utf-8')

  readStream.on('data', (chunk) => {
    process.stdout.write(chunk)
  })

  readStream.on('end', () => {
    printCurrencyPath()
  })

  readStream.on('error', (err) => {
    console.error('\nOperation failed:', err.message, '\n')
    printCurrencyPath()
  })
}

const handleAddCommand = (input) => {
  const fileName = input.slice(4).trim()
  const filePath = process.cwd()

  fs.writeFile(`${filePath}/${fileName}`, '', (err) => {
    if (err) {
      console.error('\nOperation failed:', err.message)
      printCurrencyPath()
    }
  })

  printCurrencyPath()
}

const handleMkdirCommand = (input) => {
  const dirName = input.slice(6).trim()
  const filePath = process.cwd()

  fs.mkdir(`${filePath}/${dirName}`, { recursive: true }, (err) => {
    if (err) {
      console.error('\nOperation failed:', err.message)
      printCurrencyPath()
    }
  })
}

const handleRnCommand = (input) => {
  const args = input.slice(3).trim().split(/\s+/)

  if (args.length < 2) {
    console.error('\nOperation failed: expected format is `rn path_to_file new_filename`')
    printCurrencyPath()
    return
  }

  const [oldPath, newFilename] = args
  const absoluteOldPath = path.resolve(process.cwd(), oldPath)
  const dir = path.dirname(absoluteOldPath)
  const absoluteNewPath = path.join(dir, newFilename)

  fs.rename(absoluteOldPath, absoluteNewPath, (err) => {
    if (err) {
      console.error('\nOperation failed:', err.message)
      printCurrencyPath()
      return
    }
    console.log(`\nFile renamed to: ${newFilename}`)
    printCurrencyPath()
  })
}

const handleCpCommand = (input) => {
  const args = input.slice(3).trim().split(' ')
  const [srcPath, destDir] = args

  if (!srcPath || !destDir) {
    console.error('\nInvalid input. Usage: cp path_to_file path_to_new_directory')
    return
  }

  const fileName = path.basename(srcPath)
  const srcAbsPath = path.resolve(srcPath)
  const destAbsDir = path.resolve(destDir)

  let finalFileName = fileName
  if (path.dirname(srcAbsPath) === destAbsDir) {
    const ext = path.extname(fileName)
    const nameWithoutExt = path.basename(fileName, ext)
    finalFileName = `${nameWithoutExt} copy${ext}`
  }

  const destPath = path.join(destDir, finalFileName)

  fs.mkdir(destDir, { recursive: true }, (mkdirErr) => {
    if (mkdirErr) {
      console.error('\nOperation failed:', mkdirErr.message)
      printCurrencyPath()
      return
    }

    const readStream = fs.createReadStream(srcAbsPath)
    const writeStream = fs.createWriteStream(destPath)

    readStream.on('error', (err) => {
      console.error('\nOperation failed:', err.message)
      printCurrencyPath()
    })

    writeStream.on('error', (err) => {
      console.error('\nOperation failed:', err.message)
      printCurrencyPath()
    })

    readStream.pipe(writeStream)

    writeStream.on('finish', () => {
      printCurrencyPath()
    })
  })
}

const handleMvCommand = (input) => {
  const args = input.slice(3).trim().split(' ')
  const [srcPath, destDir] = args

  if (!srcPath || !destDir) {
    console.error('\nInvalid input. Usage: mv path_to_file path_to_new_directory')
    printCurrencyPath()
    return
  }

  const fileName = path.basename(srcPath)
  const srcAbsPath = path.resolve(srcPath)
  const destAbsDir = path.resolve(destDir)

  let finalFileName = fileName
  if (path.dirname(srcAbsPath) === destAbsDir) {
    const ext = path.extname(fileName)
    const nameWithoutExt = path.basename(fileName, ext)
    finalFileName = `${nameWithoutExt}.copy${ext}`
  }

  const destPath = path.join(destDir, finalFileName)

  fs.mkdir(destDir, { recursive: true }, (mkdirErr) => {
    if (mkdirErr) {
      console.error('\nOperation failed:', mkdirErr.message)
      printCurrencyPath()
      return
    }

    const readStream = fs.createReadStream(srcAbsPath)
    const writeStream = fs.createWriteStream(destPath)

    readStream.on('error', (err) => {
      console.error('\nOperation failed:', err.message)
      printCurrencyPath()
    })

    writeStream.on('error', (err) => {
      console.error('\nOperation failed:', err.message)
      printCurrencyPath()
    })

    writeStream.on('finish', () => {
      fs.unlink(srcAbsPath, (unlinkErr) => {
        if (unlinkErr) {
          console.error('\nCopied, but failed to delete original file:', unlinkErr.message)
        }
        printCurrencyPath()
      })
    })

    readStream.pipe(writeStream)
  })
}

const handleRmCommand = (input) => {
  const filePath = input.slice(3).trim()

  if (!filePath) {
    console.error('\nOperation failed: \nInvalid input. Usage: rm path_to_file')
    printCurrencyPath()
    return
  }

  const absPath = path.resolve(filePath)

  fs.unlink(absPath, (err) => {
    if (err) {
      console.error('\nOperation failed:', err.message)
      printCurrencyPath()
    }

    printCurrencyPath()
  })
}

const handleCompressCommand = (input) => {
  const args = input.slice(8).trim().split(' ')
  const [srcPath, destArg] = args

  if (!srcPath || !destArg) {
    console.error('\nOperation failed:\nInvalid input. Usage: compress path_to_file path_to_destination')
    return
  }

  const source = path.resolve(srcPath)
  const destPath = path.resolve(destArg)

  if (!fs.existsSync(source) || !fs.statSync(source).isFile()) {
    console.error('\nOperation failed:\nSource file does not exist or is not a file.')
    return
  }

  let destination

  try {
    const stat = fs.statSync(destPath)

    if (stat.isDirectory()) {
      const fileName = path.basename(source) + '.br'
      destination = path.join(destPath, fileName)
    } else {
      destination = destPath
    }

  } catch (err) {
    destination = destPath
  }

  const readStream = fs.createReadStream(source)
  const writeStream = fs.createWriteStream(destination)
  const brotli = zlib.createBrotliCompress()

  readStream.on('error', (err) => {
    console.error('\nOperation failed:', err.message)
    printCurrencyPath()
  })

  writeStream.on('error', (err) => {
    console.error('\nOperation failed:', err.message)
    printCurrencyPath()
  })

  writeStream.on('close', () => {
    printCurrencyPath()
  })

  readStream.pipe(brotli).pipe(writeStream)
}

const handleDecompressCommand = (input) => {
  const args = input.slice(10).trim().split(' ')
  const [srcPath, destArg] = args

  if (!srcPath || !destArg) {
    console.error('\nOperation failed:\nInvalid input. Usage: decompress path_to_file path_to_destination')
    return
  }

  const source = path.resolve(srcPath)
  const destPath = path.resolve(destArg)

  if (!fs.existsSync(source) || !fs.statSync(source).isFile()) {
    console.error('\nOperation failed:\nSource file does not exist or is not a file.')
    return
  }

  let destination

  try {
    const stat = fs.statSync(destPath)
    if (stat.isDirectory()) {
      const fileName = path.basename(source).replace(/\.br$/, '')
      destination = path.join(destPath, fileName)
    } else {
      destination = destPath
    }
  } catch (err) {
    destination = destPath
  }

  const readStream = fs.createReadStream(source)
  const writeStream = fs.createWriteStream(destination)
  const brotli = zlib.createBrotliDecompress()

  readStream.on('error', (err) => {
    console.error('\nOperation failed:', err.message)
    printCurrencyPath()
  })

  writeStream.on('error', (err) => {
    console.error('\nOperation failed:', err.message)
    printCurrencyPath()
  })

  writeStream.on('close', () => {
    printCurrencyPath()
  })

  readStream.pipe(brotli).pipe(writeStream)
}

export {
  handleCatCommand,
  handleAddCommand,
  handleMkdirCommand,
  handleRnCommand,
  handleCpCommand,
  handleMvCommand,
  handleRmCommand,
  handleCompressCommand,
  handleDecompressCommand
}
