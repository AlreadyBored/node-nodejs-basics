'use strict'

const path = require('path')
const { readFile } = require('fs/promises')

const fName = path.resolve(__dirname, `files`, `fileToRead.txt`)

export const read = async () => {
  let output = ''

  try {
    output = await readFile(fName)
  } catch (e) {
    if (e.code === `ENOENT`) {
      throw new Error(errorText)
    } else {
      throw e
    }
  }

  console.log(output)

  // Write your code here 

};
