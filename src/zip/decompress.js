import fs, { read } from "fs";
import zlib from "zlib";
import path from "path";

const decompress = async () => {
    const readStream = fs.createReadStream(path.join(import.meta.dirname, "files/archive.gz"));

    const writeStream = fs.createWriteStream(path.join(import.meta.dirname, "files/fileToCompress.txt"));

    if (!fs.existsSync(path.join(import.meta.dirname, "files/archive.gz"))) {
        console.error("archive.gz already exists");
        return;
    }

    if (fs.existsSync(path.join(import.meta.dirname, "files/fileToCompress.txt"))) {
        console.error("fileToCompress.txt already exists");
        return;
    }

    const gunzip = zlib.createGunzip();

    gunzip.pipe(readStream).pipe(writeStream);

    readStream.on("error", (err) => {
        console.error("Error reading file:", err);
    });

    writeStream.on("error", (err) => {
        console.error("Error writing decompressed file:", err);
    });
};

await decompress();
