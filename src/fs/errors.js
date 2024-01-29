export class FsOperationFailed extends Error {  
  constructor () {
    super('FS operation failed')
    
    Error.captureStackTrace(this, this.constructor);
  }
}
