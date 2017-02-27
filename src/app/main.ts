let os = require('os');
let fs = require('fs');

//require('nw.gui').Window.get().showDevTools();

var homeDir = os.userInfo().homedir;
var username = os.userInfo().username;

var parentDir = null;
var currentDir = homeDir;

let contentElement = document.getElementById("content");

function getObjectInformation(path, file, callback) {
    return fs.stat(`${path}\\${file}`, function (err, stats) {
       if (err) {
       		console.log("err");
           return console.error(err);
       }
       callback(stats, path, file);
    });
}

function buildFileElement(el, path, name) {
	el.classList.add("file");
    el.innerHTML = name;
	var icon = document.createElement("i");
	icon.classList.add("fa", "fa-file");
	el.append(icon);
	return el;
}

function buildDirectoryElement(el, path, name) {
	el.classList.add("directory");
    el.innerHTML = name;
	el.onclick = () => {
		initFilebrowser(`${path}\\${name}`);
	}
	var icon = document.createElement("i");
	icon.classList.add("fa", "fa-folder");
	el.append(icon);
	return el;
}

var buildElement = (stats, path, name) => {
	var el = document.createElement("div");
    if (stats.isFile()) {
		el = buildFileElement(el, path, name);
	}
    if (stats.isDirectory()) {
		el = buildDirectoryElement(el, path, name);
	}
	contentElement.append(el);
};

function initFilebrowser(directory) {
	contentElement.innerHTML = "";
	currentDir = directory;
	fs.readdir(directory, function(err, files){
	   if (err) {
	      return console.error(err);
	   }
	   parentDir = getParentDirectory(directory);

	   files.forEach( function (file){
	       console.log(file);
	       getObjectInformation(directory, file, buildElement);
	   });
	});
}

initFilebrowser(homeDir);
