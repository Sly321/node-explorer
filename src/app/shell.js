let shell = document.getElementById("shell");
var commandHistory = [];
var historyCounter = 0;

function browseHistoryUp() {
    console.log(`historyCounter: ${historyCounter}`);
    historyCounter++;
    var total = commandHistory.length;
    if(total >= historyCounter) {
    } else {
        historyCounter = commandHistory.length;
    }
    shell.value = commandHistory[total - historyCounter];
}

function browseHistoryDown() {
    console.log(`historyCounter: ${historyCounter}`);
    historyCounter--;
    var total = commandHistory.length;
    if(1 <= historyCounter) {
        shell.value = commandHistory[total - historyCounter];
    } else {
        historyCounter = 0;
        shell.value = "";
    }
}

function executeShell() {
    var command = shell.value;
    commandHistory.push(command);
    shell.value = "";
}

function toggleShell() {
    if (shell.classList.contains("visible")) {
        shell.classList.remove("visible");
    } else {
        shell.classList.add("visible");
        shell.focus();
    }
}

/** Key Listener */
document.body.onkeydown = function(e) {
    switch(String.fromCharCode(e.keyCode)) {
        case " ":
            if (e.ctrlKey) {
                toggleShell();
            }
            break;
    }
    // console.log(String.fromCharCode(e.keyCode) + " --> "+e.keyCode);
};

shell.onkeydown = function(e) {
    switch(e.keyCode) {
        case 38:
            browseHistoryUp();
            break;
        case 40:
            browseHistoryDown();
            break;
        case 13:
            executeShell();
            historyCounter = 0;
            break;
        default:
            historyCounter = 0;
            break;
    }
    //console.log(e.keyCode);
};
