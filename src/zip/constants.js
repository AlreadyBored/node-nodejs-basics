const FOLDER_PATH = 'files';
const FILE_NAME = 'fileToCompress.txt';
const ARCHIVE_NAME = 'archive.gz';
export const fileUrl = new URL(`./${FOLDER_PATH}/${FILE_NAME}`, import.meta.url);
export const archiveUrl = new URL(`./${FOLDER_PATH}/${ARCHIVE_NAME}`, import.meta.url);