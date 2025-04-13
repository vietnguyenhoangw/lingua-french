import path from "path";
import fs from "fs";

export const readJsonFile = (fileName: string) => {
    try {
        const filePath = path.join(process.cwd(), "public/static/data", fileName);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const jsonData = JSON.parse(fileContents);
        return jsonData;
    } catch (error) {
        console.error("[file-helper][readJsonFile] Error: ", error);
        return null;
    }
};