import fs from "fs";
import zlib from "zlib";
import path from "path";

const compress = async () => {
    const readStream = fs.createReadStream(path.join(import.meta.dirname, "files/fileToCompress.txt"));
    const writeStream = fs.createWriteStream(path.join(import.meta.dirname, "files/archive.gz"));
    const gzip = zlib.createGzip();

    gzip.pipe(readStream).pipe(writeStream);

    readStream.on("error", (err) => {
        console.error("Error reading file:", err);
    });

    writeStream.on("error", (err) => {
        console.error("Error writing compressed file:", err);
    });
};

await compress();

//archive.gz
