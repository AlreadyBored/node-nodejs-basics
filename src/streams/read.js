const read = async () => {
    var fs=require('fs');
    var readStream=fs.createReadStream("src/streams/files/fileToRead.txt");
    var writeStream=fs.createWriteStream("src/streams/files/process.stdout");
    readStream.pipe(writeStream);
    await readStream.on('end',()=>{
        console.log("Done!");
    });
};

read();