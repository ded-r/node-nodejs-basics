import fs from "fs";
import path from "path";

const write = async () => {
    const writeStream = fs.createWriteStream(path.join(import.meta.dirname, "files/fileToWrite.txt"));

    if (!writeStream) {
        throw new Error("FS operation failed");
    }

    process.stdin.pipe(writeStream);

    writeStream.on("error", () => {
        throw new Error("FS operation failed");
    });
};

await write();
