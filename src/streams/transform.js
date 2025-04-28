import { Transform } from "stream";

const transform = async () => {
    const readStream = process.stdin;
    const writeStream = process.stdout;

    if (!readStream || !writeStream) {
        throw new Error("FS operation failed");
    }

    const myTransform = new Transform({
        transform(chunk, encoding, callback) {
            const transformedChunk = chunk.toString().split("").reverse().join("");
            callback(null, transformedChunk);
        },
    });

    readStream.pipe(myTransform).pipe(writeStream);

    readStream.on("error", () => {
        throw new Error("FS operation failed");
    });

    writeStream.on("error", () => {
        throw new Error("FS operation failed");
    });
};

await transform();
