import fs from "fs";
import path from "path";

const remove = async () => {
    const filePath = path.join(import.meta.dirname, "files/fileToRemove.txt");
    fs.rm(filePath, (err) => {
        if (err) {
            throw new Error("FS operation failed");
        } else {
            console.log("Success");
        }
    });
};

await remove();
