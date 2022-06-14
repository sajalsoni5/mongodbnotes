// fs.readdir allows you to get all the file names present inside a directory
//suppose we have a directory named : exampleDir >> files: a.txt,b.txt,c.txt
let fs = require("fs");

fs.readdir("exampleDir", (err, files) => {
  if (err) console.log(err);
  else {
    console.log(files);
  }
});
// output: [ 'a.txt', 'b.txt', 'c.txt' ]

// If we want to delete all the files inside a folder
fs.readdir("exampleDir", (err, files) => {
  if (err) console.log(err);
  else {
    for (let file of files) {
      fs.unlink("exampleDir/" + file, (err) => {
        if (err) console.log(err);
        else {
          console.log(file, "removed successfully");
        }
      });
    }
  }
});
// output:
// a.txt removed successfully
// b.txt removed successfully
// c.txt removed successfully
