let os = require('os');
let fs = require('fs');

require('nw.gui').Window.get().showDevTools()

var homeDir = os.userInfo().homedir;
var username = os.userInfo().username;
var currentDir = homeDir;
let contentElement = document.getElementById("content");

function getObjectInformation(path, file, callback) {
    return fs.stat(`${path}\\${file}`, function (err, stats) {
       if (err) {
           return console.error(err);
       }
       console.log(stats);
       callback(stats, file);
    });
}

fs.readdir(homeDir, function(err, files){
   if (err) {
      return console.error(err);
   }
   var str;
   files.forEach( function (file){
       console.log(file);
       getObjectInformation(currentDir, file, buildElement);
      //str += `${file} | File? ${file.isFile()} | Directory? ${file.isDirectory()}<br />`;
   });
   //document.getElementById("content").innerHTML = str;

});

function buildElement(stats, name) {
    var el = document.createElement("div").innerHTML = name;
    if (stats.isFile()) { el.classList.add("file"); }
    if (stats.isDirectory()) { el.classList.add("directory"); }
    contentElement.append(el);
    console.log(stats);
}
