import { getArgsMap } from '../../cli/args.js';
import { handleOcOperations } from './oc_operations.js';
import { copyFile, createFile, moveFile, printFileContent, removeFile, renameFile } from './files_operations.js';
import {changeDirectory, goUp, printLsInfo} from './directory.js';
import {userInfo} from 'os';
import { decompress, compress } from './zip.js';
import { calculateHash } from './hash.js';

const args = getArgsMap();
const userName = args.get('username');
process.stdout.write(`Welcome to the File Manager, ${userName || userInfo().username}!`);
changeDirectory();


const echoInput = (chunk) => {
    const values = chunk.toString().split(' ');
    const operation = values[0].trim();
    const param = values[1]?.trim();
    try {
        switch (operation) {
        case '.exit':
            process.exit(0);
            break;
        case 'ls':
            printLsInfo();
            break;
        case 'cd':
            changeDirectory(param);
            break;
        case 'up':
            goUp();
            break;
        case 'cat':
            printFileContent(param);
            break;
        case 'add':
            createFile(param);
            break;
        case 'rn':
            renameFile(param);
            break;
        case 'cp':
            copyFile(param);
            break;
        case 'move':
            moveFile(param);
            break;
        case 'rm':
            removeFile(param);
            break;
        case 'oc':
            handleOcOperations(param);
            break;

        case 'compress':
            compress(param, values[2]?.trim());
            break;

        case 'decompress':
            decompress(param, values[2]?.trim());
            break;

        case 'hash':
            calculateHash(param);
            break;
        default:
            console.log('Operation is not defined')
        }
    } catch (e) {
        console.log('Operation failed', e);
    }
};

process.stdin.on('data', echoInput);

