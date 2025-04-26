import fs from "fs";
import path from "path";

const copy = async () => {
    const srcDir = path.join(import.meta.dirname, "files");
    const destDir = path.join(import.meta.dirname, "files_copy");

    if (fs.existsSync(srcDir) && !fs.existsSync(destDir)) {
        fs.mkdirSync(destDir);
    } else {
        throw new Error("FS operation failed");
    }

    fs.cp(srcDir, destDir, { recursive: true }, (err) => {
        if (err) {
            console.error("FS operation failed:", err);
        } else {
            console.log("Success");
        }
    });
};

await copy();
