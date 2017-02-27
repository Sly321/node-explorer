function getParentDirectory(directory) {
    var currentDirArray = directory.split("\\");
    var length = currentDirArray.length;
    var parentDir = "";
    switch (length) {
        case 2:
            parentDir = currentDirArray.slice(0, currentDirArray.length - 1).join("\\");
			parentDir += "\\";
            break;
        case 1:
            break;
        default:
            parentDir = currentDirArray.slice(0, currentDirArray.length - 1).join("\\");
            break;
    }
    return parentDir;
}
exports.getParentDirectory = getParentDirectory;
