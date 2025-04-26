import fs from "fs";
import path from "path";

const rename = async () => {
    const filePathOldName = path.join(import.meta.dirname, "files/wrongFilename.txt");
    const filePathNewName = path.join(import.meta.dirname, "files/properFilename.md");

    if (fs.existsSync(filePathNewName)) {
        throw new Error("FS operation failed");
    }

    fs.rename(filePathOldName, filePathNewName, (err) => {
        if (err) {
            throw new Error("FS operation failed");
        } else {
            console.log("Success");
        }
    });
};

await rename();
