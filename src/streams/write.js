const write = async () => {
    var fs=require('fs');
    var writableStream=fs.createWriteStream("src/streams/files/fileToWrite.txt");
    await process.stdin.on('data',(data)=>{
        writableStream.write(data);
    });
    await process.stdin.on('end',()=>{
        writableStream.end();
    });
};
write();