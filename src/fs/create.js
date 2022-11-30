const fs = require("fs");
const path = require('path');

const create = async () => {
    let pathname = path.join(__dirname, "/fresh.txt"); // используйте path.join()
    const stream = fs.createWriteStream("FILE.TXT");
    // Write your code here 
};

await create();

/*
const fs = require("fs");
const path = require("path");
const process = require("process");

const readPath = path.join(__dirname, "/text.txt");

let readable = fs.createReadStream(readPath, {
  encoding: "utf-8",
});

readable.pipe(process.stdout); //вывод текста в консоль

const wtitePath = path.join(__dirname, "/temp.txt");

let writable = fs.createWriteStream(wtitePath, {
  encoding: "utf-8",
});

readable.pipe(writable); // запись в файл из потока/файла
