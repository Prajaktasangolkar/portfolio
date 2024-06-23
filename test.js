import fs from "fs";

let images = fs.readdirSync("src/assets/skill");
console.clear()
images.forEach(image => {

    let parts = image.split("-");
    if(parts.length > 1){
        parts = parts.map((part, index) => {
            if(index >= 1){
                return part.charAt(0).toUpperCase() + part.slice(1);
            }
            return part
        })
    }
    let filename = parts.join("");
    console.log(`import ${filename.split(".")[0]} from '../asset/skill/${image}';`)
})