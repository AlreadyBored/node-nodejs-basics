import fs from "fs";

const write = async () => {
    try {
        const file_path = "src/streams/files/fileToWrite.txt";

        if (!fs.existsSync(file_path)) throw new Error("No such file or directory")

        process.stdin.setEncoding("utf-8");

        const stream = fs.createWriteStream(file_path, "utf-8")

        console.log("> ");
        process.stdin.on("data", (data) => {

            stream.write(data, (err) => {
                if (err) throw new Error(err);
            })

            stream.end();

            console.log("stream writed successfull");
            process.exit(1);
        })

    } catch (error) {
        console.log(error.message);
    }
};

await write();