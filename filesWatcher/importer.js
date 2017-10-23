const fs = require('fs');
const jsonFolder = "./";

class Importer {
    constructor (){}
    import(path, filename){
        return new Promise((resolve, reject) => {
            fs.readFile(path + filename, 'utf8', (err, data) => {
                if (err){
                    console.log("Error! Can't find " + filename);
                    reject(err);
                }
                else {
                    resolve(data);
                }
            })
        }).then((data) => {
            let obj = {};
            let id = 0;
            let arrayOfPositions = data.split("\n");

            arrayOfPositions.forEach((position) => {
                let positionToJson = [];
                let arrayOfProperties = position.split(",");
                arrayOfProperties.forEach((property) => {
                    positionToJson.push(property.replace('"',""));
                });
                
                obj[id] = positionToJson;
                id++;
            });
            return JSON.stringify(obj, null, " ");

        }).then((parsedObject) => {
            this.writeToJson(parsedObject, jsonFolder + filename.substring(0, filename.length - 4) + ".json");
        });
    }

    importSync(path, filename){
        let data;
        try {
            data = fs.readFileSync(path + filename, "utf8");
        } catch (err){
            console.log("Error! Can't find " + filename);
            return;
        }

        let obj = {};
        let id = 0;
        let arrayOfPositions = data.split("\n");

        arrayOfPositions.forEach((position) => {
            let positionToJson = [];
            let arrayOfProperties = position.split(",");
            arrayOfProperties.forEach((property) => {
                positionToJson.push(property.replace('"',""));
            });

            obj[id] = positionToJson;
            id++;
        });

        let objToJson = JSON.stringify(obj, null, " ");
        fs.writeFileSync(jsonFolder + filename.substring(0, filename.length - 4) + ".json", objToJson);
        console.log(filename + " was changed.");
        return objToJson;
    }

    writeToJson (value, filename){
        return new Promise((resolve, reject) => {
            fs.writeFile(filename, value, (err) => {
                if (err){
                    reject(err);
                }
                else {
                    console.log(filename + " was changed.");
                    resolve();
                }
            });
        });
    }
}

module.exports = new Importer();
