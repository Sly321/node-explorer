let os = require('os');
let fs = require('fs');

//require('nw.gui').Window.get().showDevTools();

var homeDir = os.userInfo().homedir;
var username = os.userInfo().username;
var currentDir = homeDir;
let contentElement = document.getElementById("content");

function getObjectInformation(path, file, callback) {
    return fs.stat(`${path}\\${file}`, function (err, stats) {
       if (err) {
       		console.log("err");
           return console.error(err);
       }
       console.log(stats);
       callback(stats, file);
    });
}

function buildFileElement(el) {
	el.classList.add("file");
	var icon = document.createElement("i");
	icon.classList.add("fa", "fa-file");
	el.append(icon);
	return el;
}

function buildDirectoryElement(el) {
	el.classList.add("directory");
	var icon = document.createElement("i");
	icon.classList.add("fa", "fa-folder");
	el.append(icon);
	return el;
}

var buildElement = (stats, name) => {
	var el = document.createElement("div");
    el.innerHTML = name;
    if (stats.isFile()) {
		el = buildFileElement(el);
	}
    if (stats.isDirectory()) {
		el = buildDirectoryElement(el);
	}
	contentElement.append(el);
};

function initFilebrowser() {
	fs.readdir(homeDir, function(err, files){
	   if (err) {
	      return console.error(err);
	   }
	   files.forEach( function (file){
	       console.log(file);
	       getObjectInformation(currentDir, file, buildElement);
	   });
	});
}

initFilebrowser();
