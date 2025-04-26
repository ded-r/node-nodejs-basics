import fs from "fs";
import path from "path";

const list = async () => {
    const dirpath = path.join(import.meta.dirname, "files");

    if (!fs.existsSync(dirpath)) {
        throw new Error("FS operation failed");
    }

    fs.readdir(dirpath, (err, files) => {
        if (err) {
            throw new Error("FS operation failed");
        } else {
            console.log(files);
        }
    });
};

await list();
