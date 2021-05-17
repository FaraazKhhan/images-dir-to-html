const fs = require('fs');
const path = require('path');

const fullPath = path.join(__dirname, '../public/images');

exports.filesArray = [];

fs.readdir(fullPath, (error, files) => {
    if(error) {
        return console.log(`Unabale to scan the directory ${error}`);
    }
    files.forEach((file) => {
        this.filesArray.push(file);
    });
});

