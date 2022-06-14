const fs = require("fs");
//fs.unlink lets you delete any file

fs.unlink("test2.txt", (err) => {
  //first argument takes the file which we want to delete
  if (err) console.log(err);
  else console.log("File deleted successfully");
});

// output:
// File deleted successfully
