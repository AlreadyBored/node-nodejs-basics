import { compressFile } from "./compressFile.js";
import { createNewFile } from "./createNewFile.js";
import { decompressFile } from "./decompressFile.js";
import { deleteFile } from "./deleteFile.js";
import { getUpperDir } from "./getUpperDir.js";
import { goToDir } from "./goToDir.js";
import { moveFile } from "./moveFile.js";
import { printBye } from "./printBye.js";
import { printFileContent } from "./printFileContent.js";
import { printHash } from "./printHash.js";
import { printListOfFiles } from "./printListOfFiles.js";
import { printOS } from "./printOS.js";
import { renameFile } from "./renameFile.js";

const commandList = {
    ".exit": (_, args, [userName]) => {
        printBye(userName)
        process.exit(1);
    },
    "SIGINT": (_, args, [userName]) => {
        printBye(userName)
        process.exit(1);
    },
    "up": async (currentPath) => {
        currentPath.path = await getUpperDir(currentPath.path);

    },
    "cd": async (currentPath, [destination]) => {
        currentPath.path = await goToDisr(currentPath.path, destination);
    },
    "ls": async ({ path }) => {
        await printListOfFiles(path);

    },
    "cat": async ({ path }, [filepath]) => {
        await printFileContent(path, filepath);
    },
    "add": async ({ path }, [filepath]) => {
        await createNewFile(path, filepath);
    },
    "rn": async ({ path }, [oldpath, newpath]) => {
        await renameFile(path, oldpath, newpath)
    },
    "mv": async ({ path }, [oldpath, newpath]) => {
        await moveFile(path, oldpath, newpath)
    },
    "rm": async ({ path }, [filepath]) => {
        await deleteFile(path, filepath)
    },
    "os": ({ path }, [optionType]) => {
        printOS(path, optionType)
    },
    "hash": async ({ path }, [filepath]) => {
        await printHash(path, filepath);
    },
    "compress": async ({ path }, [oldpath, newpath]) => {
        await compressFile(path, oldpath, newpath)
    },
    "decompress": async ({ path }, [archivepath, decompresspath]) => {
        await decompressFile(path, archivepath, decompresspath)
    }
}

export const commandPrompts = {
    ".exit": "Exit to File Manager",
    "up": "Go to parent DIR",
    "cd": "Go to dirpath <path>",
    "ls": "Print list of files, from current DIR",
    "cat": "Print file content by path <filename>",
    "add": "Create new empty file <filename>, from current DIR",
    "rn": "Rename file <oldname> <newname>",
    "mv": "Move file <oldpath> <newpath>",
    "rm": "Delete file by <filename>",
    "os": "Print OS information. By setting --EOL, --cpus, --homedir, --username, --architecture",
    "hash": "Print hash of file by filepath <filepath>",
    "compress": "Compress file <filepath> <archive_filepath_without_extension>",
    "decompress": "Decompress file <archfilepath> <decompressfilepath>"
}

export const printCommandsPromts = (currentWorkingDir) => {
    const prompts = Object.entries(commandPrompts).map(([command, description]) => `${command} - ${description}`).join('\n')
    console.log(`\nYou are currently in ${currentWorkingDir}`) 

    console.log('\nAvailable commands list\n');
    console.log(prompts)
}

export const commandDispatch = async (command, args, currentWorkingDir = '', usename = '') => {  
    if (command in commandList) {
        await commandList[command](currentWorkingDir, args, usename);
        printCommandsPromts(currentWorkingDir.path)
    }
    else console.error('Invalid input')
}