import { createHash } from "crypto";
import { createReadStream } from "fs";
import path from "path";

const calculateHash = async () => {
    const stream = createReadStream(path.join(import.meta.dirname, "files/fileToCalculateHashFor.txt"));
    if (!stream) {
        throw new Error("FS operation failed");
    }
    const hash = createHash("sha256");
    stream.pipe(hash);

    hash.on("readable", () => {
        const data = hash.read();
        if (!data) {
            return;
        }
        console.log(data.toString("hex"));
    });
};

await calculateHash();
