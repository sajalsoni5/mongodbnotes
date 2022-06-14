//zlib , gunzip is used to decompress the data

const fs = require("fs");
const zlib = require("zlib");
const gunzip = zlib.createGunzip(); //this will transform the data into compressed data

let readStream = fs.createReadStream("example.txt.gz"); //note .gz
let writeStream = fs.createWriteStream("uncompressed.txt");

readStream.pipe(gunzip).pipe(writeStream); //passing the chunks to gunzip to decompress and using writestream to create the file
