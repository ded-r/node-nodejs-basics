import fs from "fs";
import path from "path";

const read = async () => {
    fs.createReadStream(path.join(import.meta.dirname + "/files/fileToRead.txt"), { encoding: "utf8" })
        .on("readable", function () {
            let data;

            while ((data = this.read()) !== null) {
                process.stdout.write(data + "\n");
            }
        })
        .on("error", function (err) {
            throw new Error("FS operation failed");
        });
};

await read();
