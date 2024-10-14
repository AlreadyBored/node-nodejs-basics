const readline = require("readline");
const path = require("path");
const os = require("os");
const fs = require('fs');
const { parseArgs } = require("./cli/args");
const { createFile } = require("./fs/create");
const { deleteFile } = require("./fs/delete");
const { listFiles } = require("./fs/list");
const { readFile } = require("./fs/read");
const { renameFile } = require("./fs/rename");
const { copyFile } = require("./fs/copy");
const { calculateHash } = require("./hash/calcHash");
const { compressFile } = require("./zip/compress");
const { decompressFile } = require("./zip/decompress");
const { getOSInfo } = require("./os/osinfo");
const {moveFile}=require("./fs/move")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const username = process.argv
  .find((arg) => arg.startsWith("--username="))
  .split("=")[1];
let currentDir = os.homedir();

console.log(`Welcome to the File Manager, ${username}!`);
console.log(`You are currently in ${currentDir}`);

const changeDirectory = (dir) => {
  const newPath = path.resolve(currentDir, dir);
  fs.stat(newPath, (err, stats) => {
    if (err || !stats.isDirectory()) {
      console.log("Operation failed: Invalid directory");
    } else if (newPath.startsWith(os.homedir())) {
      currentDir = newPath;
      console.log(`You are currently in ${currentDir}`);
    } else {
      console.log("Operation failed: Cannot go above home directory");
    }
  });
};
const handleCommand = (command) => {
  const [cmd, ...args] = command.trim().split(" ");

  switch (cmd) {
    case "ls":
      listFiles(currentDir);
      break;
    case "cd":
      if (args.length > 0) {
        changeDirectory(args[0]);
      } else {
        console.log("Operation failed: No directory specified");
      }
      break;

    case "up":
      if (currentDir !== os.homedir()) {
        currentDir = path.dirname(currentDir);
        console.log(`You are currently in ${currentDir}`);
      } else {
        console.log("Operation failed: You are at the root directory");
      }
      break;
    case "cat":
      readFile(path.join(currentDir, args[0]));
      break;
    case "add":
      if (args.length > 0) {
        createFile(args[0], currentDir); 
      } else {
        console.log('Operation failed: No file name provided');
      }
      break;

    case "rn":
      renameFile(
        path.join(currentDir, args[0]),
        path.join(currentDir, args[1])
      );
      break;
    case "cp":
      copyFile(path.join(currentDir, args[0]), path.join(currentDir, args[1]));
      break;
    case "mv":
      moveFile(path.join(currentDir, args[0]), path.join(currentDir, args[1]));
      break;
    case "rm":
      deleteFile(path.join(currentDir, args[0]));
      break;
    case "os":
      getOSInfo(args[0]);
      break;
    case "hash":
      calculateHash(path.join(currentDir, args[0]));
      break;
    case "compress":
      compressFile(
        path.join(currentDir, args[0]),
        path.join(currentDir, args[1])
      );
      break;
    case "decompress":
      decompressFile(
        path.join(currentDir, args[0]),
        path.join(currentDir, args[1])
      );
      break;
    case ".exit":
      console.log(`Thank you for using File Manager, ${username}, goodbye!`);
      rl.close();
      break;
    default:
      console.log("Invalid input");
  }
};

rl.on("line", (input) => handleCommand(input));
rl.on("close", () => process.exit(0));
