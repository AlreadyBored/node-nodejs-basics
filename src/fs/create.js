import { readdir, open } from 'fs/promises'
import {FileError} from './utils.js'
import {CREATE_FILE_CONTENT, FS_PATH, CREATE_FILE_NAME} from './constants.js'


export const create = async () => {
  let filehandle;
  let fileList
  
  try {
    fileList = await readdir(FS_PATH);    
  } catch (err) {
    throw new FileError('Error with reading direcory.')
  }

  if (fileList.includes(CREATE_FILE_NAME)) {
    throw new FileError(`File is already exist.`)
  }

  try {
    filehandle = await open(`${path}/${fileName}`, 'w')
    filehandle.writeFile(CREATE_FILE_CONTENT)
  } catch (err){
    throw new FileError('Error with writing file.')
  } finally {
    await filehandle?.close();
  }
}

create()
