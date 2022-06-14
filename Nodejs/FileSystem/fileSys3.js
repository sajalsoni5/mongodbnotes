const fs = require("fs");
//fs.rename lets you rename any file

fs.rename("test.txt", "test2.txt", (err) => {
  //first argument takes the file which we want to rename
  if (err) console.log(err); //second arg is the new file name
  else console.log("File renamed successfully");
});

// output:
// File renamed successfully
